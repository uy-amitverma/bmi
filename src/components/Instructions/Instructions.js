import styles from "./Instruction.module.css";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";

const Instructions = () => {
  const [proceedToImageCapture, setProceedToImageCapture] = useState(false);
  const [heightCaptured, setHeightCaptured] = useState(false);
  const [weightCaptured, setWeightCaptured] = useState(false);
  const [studentIdentified, setStudentIdentified] = useState(false);
  const run = () => {
    const id1 = setInterval(() => {
      setProceedToImageCapture(true);
    }, 5000);
    const id2 = setInterval(() => {
      setStudentIdentified(true);
    }, 5000);
    const id3 = setInterval(() => {
      setHeightCaptured(true);
    }, 5000);
    const id4 = setInterval(() => {
      setWeightCaptured(true);
    }, 5000);
  };
  run();
  return (
    <>
      <div className={styles.steps}>
        <h2>Instructions</h2>
        <div className={styles["capture-data-container"]}>
          <div className={styles.step}>
            {proceedToImageCapture ? (
              <CheckIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <span className={styles.heading}>Image capture</span>
          </div>
          <div className={styles.step}>
            {proceedToImageCapture && studentIdentified ? (
              <CheckIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <span className={styles.heading}>Student identified</span>
          </div>
          <div className={styles.step}>
            {heightCaptured ? <CheckIcon /> : <RadioButtonUncheckedIcon />}
            <span className={styles.heading}>Height capturd</span>
          </div>
          <div className={styles.step}>
            {weightCaptured ? <CheckIcon /> : <RadioButtonUncheckedIcon />}
            <span className={styles.heading}>Weight captured</span>
          </div>
          <div className={styles.step}>
            {weightCaptured ? <CheckIcon /> : <RadioButtonUncheckedIcon />}
            <span className={styles.heading}>BMI calculated</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
