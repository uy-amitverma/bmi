import { useRef, useState } from "react";
import styles from "./Result.module.css";
import Webcam from "react-webcam";
import img from "../../Images/newProject.png";
import calculationGif from "../../Images/calculationGif.gif";
import weightGif from "../../Images/weight.gif";
import clouds from "../../Images/cloud.jpeg";

const Result = () => {
  const sliderRef = useRef(null);
  const sliderChange = () => {
    console.log(sliderRef.current.value);
  };

  return (
    <div className={styles["image-capture-wrapper"]}>
      <img src={img} className={styles.measureImg} />
      <div className={styles["slider-container"]}>
        <input
          type="range"
          min={10}
          max={130}
          value={109}
          ref={sliderRef}
          className={styles["slider"]}
          onChange={sliderChange}
        />
      </div>
      <div className={styles["image-container"]}>
        <img src={weightGif} className={styles.weightImg} />
        <div className={styles.calculation}>
          <span>Amit Verma</span>
          <img src={clouds} className={styles.cloudImg} />
          <img src={calculationGif} className={styles.calculationImg} />
        </div>
      </div>
    </div>
  );
};

export default Result;
