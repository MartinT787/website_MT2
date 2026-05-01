import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Consulting from "./pages/Consulting";
import ClinicalStudies from "./pages/ClinicalStudies";
import LipidHub from "./pages/LipidHub";
import HeartHealthy from "./pages/profiles/HeartHealthy";
import Cholesterol from "./pages/profiles/Cholesterol";
import Triglyceride from "./pages/profiles/Triglyceride";
import FCS from "./pages/profiles/FCS";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/clinical-studies" element={<ClinicalStudies />} />
        <Route path="/lipid-nutrition" element={<LipidHub />} />
        <Route path="/heart-healthy" element={<HeartHealthy />} />
        <Route path="/cholesterol" element={<Cholesterol />} />
        <Route path="/triglyceride" element={<Triglyceride />} />
        <Route path="/fcs" element={<FCS />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
