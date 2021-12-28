import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import moment from "moment-mini";

const folder_id = "1qVcfzhi7z3IF0j09CUVShQhF4P1ZQ66Q";
// should be fine to leave this key publicly visibly, you need more auth
// to actually write to Drive
const driveAPIKey = "AIzaSyCi7BqCcsqaKXeyiD0gzh__iJxQGidCUfY";

const ClimbingVideos = () => {
  const [videoProps, setVideoProps] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

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
    } catch (e) {
      console.log(e);
    }
  };

  const getVideoProperties = (file) => {
    const url = `https://drive.google.com/uc?export=preview&id=${file.id}`;
    const grade = `V${file.name.charAt(0)}`;

    const dateStart = file.name.indexOf("_") + 1;
    const dateEnd = file.name.indexOf("_", dateStart);
    const dateString = file.name.substring(dateStart, dateEnd);
    const date = moment(dateString, "YYYYMMDD");

    return { url, grade, date };
  };

  const handleScroll = (newIndex, e) => {
    console.log(newIndex);
    setActiveIndex(newIndex);
  };

  useEffect(async () => {
    window.gapi.load("client", loadVideos);
  }, []);

  return (
    <>
      <Carousel onSelect={handleScroll} interval={null} indicators={false}>
        {videoProps.map((video, index) => (
          <Carousel.Item key={index} style={{ height: "70vh" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {index == activeIndex && (
                <video height={"100%"} controls autoPlay>
                  <source src={video.url} type="video/mp4" />
                </video>
              )}
            </div>
            <Carousel.Caption>
              <h3>Grade: {video.grade}</h3>
              <h3>Date: {video.date.format("MMM Do, YYYY")}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default ClimbingVideos;
