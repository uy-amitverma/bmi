import { useContext, useEffect, useState } from "react";
import StudentContext from "../../store/student-context";
import styles from "./StudentDetails.module.css";
const DUMMY_NAMES = ["Amit", "Shivam", "jaidev", "rahul", "suchit"];
const StudentDetails = () => {
  const [names, setNames] = useState(DUMMY_NAMES);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const filter = (val) => {
    const filteredNames = names.filter((name) => {
      return name.includes(val);
    });
    setNames(filteredNames);
  };
  return (
    <div className={styles["student-data-wrapper"]}>
      <div className={styles["student-data"]}>
        <label className={styles.label} htmlFor="studentName">
          Student Name
        </label>
        <select>
          {names.map((name) => {
            return <option>{name}</option>;
          })}
        </select>
      </div>
      <div className={styles["student-data"]}>
        <label className={styles.label} htmlFor=" height">
          Height (in cm)
        </label>
        <input className={styles.input} type="number" id="height" />
      </div>
      <div className={styles["student-data"]}>
        <label className={styles.label} htmlFor="weight">
          Weight (in Kg)
        </label>
        <input className={styles.input} type="number" id="weight" />
      </div>
      <div className={styles["student-data"]}>
        <label className={styles.label} htmlFor="bmi">
          BMI
        </label>
        <input className={styles.input} type="number" id="bmi" />
      </div>
    </div>
  );
};

export default StudentDetails;
