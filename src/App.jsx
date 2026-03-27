import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
