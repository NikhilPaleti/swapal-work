import "./App.css";

import Bottom from "./Bottom";

import HomePage from "./HomePage";
import NavBar from "./NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainingPage from "./TrainingPage";
import FacilitationPage from "./FacilitationPage";
import HydroponicsPage from "./HydroponicsPage";
import ConstructionPage from "./ConstructionPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/hydroponics" element={<HydroponicsPage />} />
          <Route
            path="/constructionconsultancy"
            element={<ConstructionPage />}
          />
          <Route path="/facilitation" element={<FacilitationPage />} />
        </Routes>
      </BrowserRouter>

      <Bottom />
    </>
  );
}

export default App;
