import "./App.css";

import Bottom from "./Bottom";

import HomePage from "./HomePage";
import NavBar from "./NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainingPage from "./TrainingPage";
import FacilitationPage from "./FacilitationPage";
import HydroponicsPage from "./HydroponicsPage";
// import ConstructionPage from "./ConstructionPage";
import Faq from "./Faq";
import Contact from "./Contact";
import About from "./About";
import Services from './Services'
import StickyWhatsapp from "./StickyWhatsapp";
import WorkPermit from "./WorkPermit";
// import Study from "./Study";
import TRP from "./TRP";
// import LiveJob from "./LiveJob";
import OpportunityCard from "./OpportunityCard";
import SkillDevelopment from "./SkillDevelopment";

function App() {
  return (
    <>
      <StickyWhatsapp/>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/hydroponics" element={<HydroponicsPage />} />
          <Route path="/WorkPermit" element={<WorkPermit />} />
          {/* <Route path="/study" element={<Study />} /> */}
          <Route path="/trp" element={<TRP />} />
          <Route path="/skilldevelopment" element={<SkillDevelopment />} />
          <Route path="/facilitation" element={<FacilitationPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/opportunitycard" element={<OpportunityCard/>} />
        </Routes>
      </BrowserRouter>

      <Bottom />
    </>
  );
}

export default App;
