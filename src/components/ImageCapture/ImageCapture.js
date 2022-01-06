import { useEffect, useState } from "react";
import styles from "./ImageCapture.module.css";

const ImageCapture = (props) => {
  const [image, setImage] = useState();
  useEffect(() => {
    startFaceVideoFeed();
  });
  const startFaceVideoFeed = async () => {
    setImage("http://localhost:5000/face_video_feed");
    props.updateInstruction("video", true);
  };
  return (
    <div className={styles.camera}>
      <img src={image} alt="student" className={styles.videoFeed} />
    </div>
  );
};
ImageCapture.defaultProps = {
  ImageCapture: () => {},
};
export default ImageCapture;
