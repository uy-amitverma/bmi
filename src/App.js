import "./App.css";
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import StudentDetails from "./components/StudentData/StudentDetails";
import StudentProvider from "./store/student-provider";
import StudentContext from "./store/student-context";
import Result from "./components/Result/Result";
import ImageCapture from "./components/ImageCapture/ImageCapture";
function App(props) {
  return (
    <StudentProvider>
      <div className="App">
        <div className="header">
          <Header visibleBMI={false} />
        </div>
        <div className="body">
          <div className="text">
            <div className="studentdata">
              <ImageCapture />
            </div>
            <div className="instruction">
              <Instructions />
            </div>
          </div>
          <div className="imagecapture">
            <Result />
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
