import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

const folder_id = "1qVcfzhi7z3IF0j09CUVShQhF4P1ZQ66Q";

const ClimbingVideos = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [gapiLoaded, setGapiLoaded] = useState(false);

  const getEmbedUrl = (fileId) => {
    return `https://drive.google.com/file/d/${fileId}/preview`;
    // return `https://drive.google.com/uc?export=preview&id=${fileId}`;
  };

  const getBoulderGrade = (fileName) => {};

  const handleScroll = (newIndex, e) => {
    console.log(newIndex);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const loadClient = () => {
      window.gapi.client.setApiKey("AIzaSyCi7BqCcsqaKXeyiD0gzh__iJxQGidCUfY");
      window.gapi.client
        .load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
        .then(() => setGapiLoaded(true))
        .catch((e) => console.log("fuck off", e));
    };
    window.gapi.load("client", loadClient);
  }, []);

  useEffect(() => {
    const loadVideos = async () => {
      const response = await window.gapi.client.drive.files.list({
        pageSize: 150,
        q: `'${folder_id}' in parents`,
      });
      setVideoUrls(response.result.files.map((file) => getEmbedUrl(file.id)));
    };
    gapiLoaded && loadVideos();
  }, [gapiLoaded]);

  return (
    <Carousel onSelect={handleScroll} interval={null} indicators={false}>
      {videoUrls.map((url, index) => (
        <Carousel.Item>
          {/* <video width="700" height="700" controls>
                            <source src={url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
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
            <iframe
              width="700px"
              height="700px"
              //   style={{ margin: "0 0 0 20px", position: "relative" }}
              src={index == activeIndex ? url : undefined}
            />
          </div>
          {/* <iframe width="700" height="700" src={undefined} style={{backgroundColor: "#" + ((1<<24)*Math.random() | 0).toString(16)}}/> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default ClimbingVideos;
