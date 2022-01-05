import { useRef, useState } from "react";
import styles from "./Result.module.css";
import img from "../../Images/newProject.png";
import calculationGif from "../../Images/calculationGif.gif";
import weightGif from "../../Images/weighImage.jpg";
import clouds from "../../Images/cloud.jpeg";
import weightCloud from "../../Images/cloudnewProject.png";
import bmiScaleImg from "../../Images/bmi.jpeg";

const Result = (props) => {
  const heightSliderRef = useRef(null);
  const bmiSliderRef = useRef(null);
  const { dataFound } = props;
  const [sliderValue, setSliderValue] = useState(props.height);
  const sliderChange = () => {
    console.log(heightSliderRef.current.value);
    setSliderValue(heightSliderRef.current.value);
  };
  const bmiSliderChange = () => {
    console.log(bmiSliderRef.current.value);
    // setSliderValue(bmiSliderRef.current.value);
  };
  return (
    <div className={styles["image-capture-wrapper"]}>
      <img src={img} className={styles.measureImg} alt='height-measurement'/>
      <div className={styles["slider-container"]}>
        <input
          type="range"
          min={10}
          max={130}
          value={sliderValue}
          ref={heightSliderRef}
          className={styles["slider"]}
          onChange={sliderChange}
        />
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["bmi-section"]}>
          <input
            type="range"
            min={16}
            max={35}
            ref={bmiSliderRef}
            className={styles["bmi-slider"]}
            onChange={bmiSliderChange}
          />
          <img className={styles.bmiScale} src={bmiScaleImg} alt="bmi scale" />
        </div>
        <div className={styles["name-weight-container"]}>
          <div className={styles["weight-wrapper"]}>
            {/* <span className={styles.weightText}>65Kg</span> */}
            <img
              src={weightCloud}
              className={styles.weightCloud}
              alt="weight"
            />
            <img
              src={weightGif}
              className={styles.weightImg}
              alt="weightCartoonImage"
            />
          </div>

          <div className={styles["name-wrapper"]}>
            {/* <span>Srinivas Shyam Sundar Kasi Visveswara Rao Danaboyina</span> */}
            <img src={clouds} className={styles.cloudImg} alt='name'/>
            <img src={calculationGif} className={styles.calculationImg} alt='calculation'/>
          </div>
        </div>
      </div>
    </div>
  );
};

Result.defaultProps = {
  height: 102,
};
export default Result;
