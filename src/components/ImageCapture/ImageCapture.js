import { useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from './ImageCapture.module.css';

const ImageCapture = () => {
  const videoConstraints = {
    width: 500,
    height: 300,
    facingMode: "user",
  };
  const [image, setImage] = useState();

  const webcamRef = useRef(null);
  const imageCaptue = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(webcamRef.current, imageSrc);
    const response = await fetch("", {
      body: {
        studentImage: imageSrc,
      },
    });
  };

  return (
    <div className={styles.camera}>
      <Webcam height={500} width={300} ref={webcamRef} />
    </div>
  );
};

export default ImageCapture;
