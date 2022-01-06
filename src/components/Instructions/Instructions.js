import styles from "./Instruction.module.css";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";

const Instructions = (props) => {
  const {
    videoFeed,
    heightCaptured,
    weightCaptured,
    studentIdentified,
  } = props;

  return (
    <>
      <div className={styles.steps}>
        <h2>Instructions</h2>
        <div className={styles["capture-data-container"]}>
          <div className={styles.step}>
            {videoFeed ? (
              <CheckIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <span className={styles.heading}>Image capture</span>
          </div>
          <div className={styles.step}>
            {videoFeed && studentIdentified ? (
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
Instructions.defaultProps = {
  videoFeed: false,
  heightCaptured: false,
  weightCaptured: false,
  studentIdentified: false,
};
export default Instructions;
