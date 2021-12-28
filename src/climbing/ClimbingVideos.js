import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';

const folder_id = '1qVcfzhi7z3IF0j09CUVShQhF4P1ZQ66Q';

const ClimbingVideos = () => {

    const [videoUrls, setVideoUrls] = useState([]);

    const getEmbedUrl = (fileId) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
        // return `https://drive.google.com/uc?export=preview&id=${fileId}`;
    }

    useEffect(async () => {
        const response = await window.gapi.client.drive.files.list({
            pageSize: 150,
            q: `'${folder_id}' in parents`
        });
        console.log("setting");
        var arr = response.result.files.map(file => getEmbedUrl(file.id));
        console.log(arr.length);
        setVideoUrls(response.result.files.map(file => getEmbedUrl(file.id)));
    }, []);
    return (
        <Carousel>
            {
                ([...videoUrls, ...videoUrls, ...videoUrls, ...videoUrls, ...videoUrls, ...videoUrls]).map(url => (
                    <Carousel.Item>
                    {/* <video width="700" height="700" controls>
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <iframe width="700" height="700" style={{backgroundColor: "#" + ((1<<24)*Math.random() | 0).toString(16)}} />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )


}
export default ClimbingVideos;