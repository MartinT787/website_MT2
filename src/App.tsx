import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HeartHealthy from "./pages/profiles/HeartHealthy";
import Cholesterol from "./pages/profiles/Cholesterol";
import Triglyceride from "./pages/profiles/Triglyceride";
import FCS from "./pages/profiles/FCS";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/heart-healthy" element={<HeartHealthy />} />
        <Route path="/cholesterol" element={<Cholesterol />} />
        <Route path="/triglyceride" element={<Triglyceride />} />
        <Route path="/fcs" element={<FCS />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
