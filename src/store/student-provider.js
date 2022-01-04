import { useReducer } from "react";
import StudentContext from "./student-context";
const initialState = {
  studentData: [],
  physicalData: {},
};
// const studentReducerFunction = (state, action) => {};
const StudentProvider = (props) => {
  // const [studentState, dispatchStundetActions] = useReducer(
  //   studentReducerFunction,
  //   initialState
  // );
  // const getStudentData = (id) => {
  //   dispatchStundetActions({ type: "GET_STUDENTDATA", payload: id });
  // };

  // const getPhysicalData = () => {
  //   dispatchStundetActions({ type: "GET_PHYSICAL_DATA" });
  // };

  const studentContext ={
      studentData: ['name', 'height', 'weight'],
      physicalData: {},
  }

  return (
      <StudentContext.Provider store={studentContext}>
          {props.children}
      </StudentContext.Provider>
  )
};

export default StudentProvider;