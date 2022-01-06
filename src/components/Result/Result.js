import { useEffect, useRef, useState } from "react";
import styles from "./Result.module.css";
import img from "../../Images/newProject.png";
import calculationGif from "../../Images/calculationGif.gif";
import weightGif from "../../Images/weighImage.jpg";
import clouds from "../../Images/nameCloud.webp";
import weightCloud from "../../Images/cloudnewProject.png";
import bmiScaleImg from "../../Images/bmi.jpeg";
import bmiContainCircle from "../../Images/circle.png";

const Result = (props) => {
  const [name, setName] = useState(null);
  const [height, setHeight] = useState(120);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(20);

  const heightSliderRef = useRef(null);
  const bmiSliderRef = useRef(null);

  const sliderChange = () => {
    console.log(heightSliderRef.current.value);
    setHeight(heightSliderRef.current.value);
  };
  const bmiSliderChange = () => {
    console.log(bmiSliderRef.current.value);
    setBmi(bmiSliderRef.current.value);
  };

  useEffect(() => {
    setInterval(getMeasurements, 1500);
  }, []);

  const getMeasurements = async (e) => {
    fetch("http://localhost:5000/getMeasurement", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "Sucees" || data.statusCode === 200) {
          if (data.bmiDone) {
            setName(data.name);
            props.updateInstruction("data", true);
            setHeight(data.height);
            setWeight(data.weight);
            setBmi(data.bmi);
          } else {
            setName(null);
            props.updateInstruction("bmiDone", false);
            setHeight(0);
            setWeight(null);
            setBmi(0);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles["image-capture-wrapper"]}>
      <img src={img} className={styles.measureImg} alt="height-measurement" />
      <div className={styles["slider-container"]}>
        <input
          type="range"
          min={10}
          max={130}
          value={height}
          ref={heightSliderRef}
          className={styles["slider"]}
          onChange={sliderChange}
        />
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["bmi-section"]}>
          <span className={styles.bmiText}>
            {Number.isInteger(bmi) ? bmi + ".0" : bmi}
          </span>
          <img
            src={bmiContainCircle}
            alt="bmi"
            className={styles.bmiContainCircle}
          />
          <input
            type="range"
            min={16}
            max={35}
            ref={bmiSliderRef}
            className={styles["bmi-slider"]}
            onChange={bmiSliderChange}
            step="0.1"
            value={bmi}
          />
          <img className={styles.bmiScale} src={bmiScaleImg} alt="bmi scale" />
        </div>
        <div className={styles["name-weight-container"]}>
          <div className={styles["weight-wrapper"]}>
            {weight && <span className={styles.weightText}>{weight}Kg</span>}
            {weight && (
              <img
                src={weightCloud}
                className={styles.weightCloud}
                alt="weight"
              />
            )}
            <img
              src={weightGif}
              className={styles.weightImg}
              alt="weightCartoonImage"
            />
          </div>

          <div className={styles["name-wrapper"]}>
            {name && <span>{name}</span>}
            {name && (
              <img src={clouds} className={styles.cloudImg} alt="name" />
            )}
            <img
              src={calculationGif}
              className={styles.calculationImg}
              alt="calculation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Result.defaultProps = {
  height: 102,
  updateInstruction: () => {},
};
export default Result;
