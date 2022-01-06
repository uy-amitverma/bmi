import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import StudentDetails from "./components/StudentData/StudentDetails";
import StudentProvider from "./store/student-provider";
import StudentContext from "./store/student-context";
import Result from "./components/Result/Result";
import ImageCapture from "./components/ImageCapture/ImageCapture";
function App(props) {
  const [videoFeed, setVideoFeed] = useState(false);
  const [heightCaptured, setHeightCaptured] = useState(false);
  const [weightCaptured, setWeightCaptured] = useState(false);
  const [studentIdentified, setStudentIdentified] = useState(false);
  const updateInstruction = (field, value) => {
    if (field === "video") {
      setVideoFeed(value);
    } else if (field === "bmiDone") {
      setHeightCaptured(false);
      setWeightCaptured(false);
      setStudentIdentified(false);
      setVideoFeed(false);
    } else {
      setHeightCaptured(value);
      setWeightCaptured(value);
      setStudentIdentified(value);
    }
  };
  return (
    <StudentProvider>
      <div className="App">
        <div className="header">
          <Header visibleBMI={false} />
        </div>
        <div className="body">
          <div className="text">
            <div className="studentdata">
              <ImageCapture updateInstruction={updateInstruction} />
            </div>
            <div className="instruction">
              <Instructions
                videoFeed={videoFeed}
                heightCaptured={heightCaptured}
                weightCaptured={weightCaptured}
                studentIdentified={studentIdentified}
              />
            </div>
          </div>
          <div className="imagecapture">
            <Result updateInstruction={updateInstruction} />
          </div>
        </div>
      </div>
    </StudentProvider>
  );
}
App.defaultProps = {
  isCameraVisible: true,
};
export default App;
