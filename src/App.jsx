import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

//function App() {
const App = () => (
  <div>
    <NavBar />
    <HomePage />
    <AboutMePage />
    <SkillsPage />
    <ProjectsPage />
    <ContactPage />
  </div>
);

export default App;
