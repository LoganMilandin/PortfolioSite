import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import moment from "moment-mini";
import {
  Button,
  ListItemText,
  Menu,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const folder_id = "1qVcfzhi7z3IF0j09CUVShQhF4P1ZQ66Q";
// should be fine to leave this key publicly visibly, you need more auth
// to actually write to Drive
const driveAPIKey = "AIzaSyCi7BqCcsqaKXeyiD0gzh__iJxQGidCUfY";

const ClimbingVideos = () => {
  const [videoProps, setVideoProps] = useState([]);
  const [originalVideoProps, setOriginalVideoProps] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getVideoProperties = (file) => {
    const url = `https://drive.google.com/uc?export=preview&id=${file.id}`;
    const grade = `V${file.name.charAt(0)}`;

    const dateStart = file.name.indexOf("_") + 1;
    const dateEnd = file.name.indexOf("_", dateStart);
    const dateString = file.name.substring(dateStart, dateEnd);
    const date = moment(dateString, "YYYYMMDD");

    return { url, grade, date };
  };

  const loadVideos = async () => {
    window.gapi.client.setApiKey(driveAPIKey);
    try {
      await window.gapi.client.load(
        "https://content.googleapis.com/discovery/v1/apis/drive/v3/rest"
      );
      const response = await window.gapi.client.drive.files.list({
        pageSize: 150,
        q: `'${folder_id}' in parents`,
      });
      const props = response.result.files.map((file) =>
        getVideoProperties(file)
      );
      props.sort((a, b) => {
        return a.date.isAfter(b.date) ? -1 : 1;
      });
      setVideoProps(props);
      setOriginalVideoProps(props);
    } catch (e) {
      console.log(e);
    }
  };

  const handleScroll = (newIndex, e) => {
    console.log(newIndex);
    setActiveIndex(newIndex);
  };

  const handleMenuItemSelected = (event) => {
    let newOrder;
    if (event.target.value === "chronological") {
      newOrder = originalVideoProps.slice().reverse();
    } else if (event.target.value === "reverse chronological") {
      newOrder = originalVideoProps;
    } else if (event.target.value === "random") {
      newOrder = shuffleVideos(originalVideoProps.slice());
    }
    setVideoProps(newOrder);
    setActiveIndex(0);
  };

  useEffect(() => {
    document.getElementById(activeIndex.toString())?.load();
  }, [videoProps]);

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffleVideos = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(async () => {
    window.gapi.load("client", loadVideos);
  }, []);

  const videoOrders = ["chronological", "reverse chronological", "random"];

  return (
    <Stack sx={{ alignItems: "center" }} spacing={1}>
      {" "}
      <div style={{ maxWidth: "40vh", margin: "6px" }}>
        <Carousel
          onSelect={handleScroll}
          interval={null}
          indicators={false}
          activeIndex={activeIndex}
        >
          {videoProps.map((video, index) => (
            <Carousel.Item key={index} style={{ height: "70vh" }}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index == activeIndex && (
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <video height={"100%"} controls id={activeIndex.toString()}>
                      <source
                        src={video.url}
                        key={video.name}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                )}
              </div>

              <Carousel.Caption>
                <h3>Grade: {video.grade}</h3>
                <h3>Date: {video.date.format("MMM Do, YYYY")}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
        <Typography>Order:</Typography>
        <NativeSelect
          onChange={handleMenuItemSelected}
          defaultValue={"reverse chronological"}
        >
          {videoOrders.map((orderName) => (
            <option key={orderName} value={orderName}>
              {orderName}
            </option>
          ))}
        </NativeSelect>
      </Stack>
    </Stack>
  );
};
export default ClimbingVideos;
