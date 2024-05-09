import JobApplicationComponent from "./components/JobApplicationComponent/JobApplicationComponent";
import "./styles/global.style.css";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <JobApplicationComponent />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
