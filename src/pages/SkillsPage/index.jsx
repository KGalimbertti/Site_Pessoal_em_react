import Button from "../../components/Button";
import "./skills.css";

const SkillsPage = () => (
  <section className="skills" id="skills">
    <div className="skills__overlay">
      <h2 className="skills__title">SKILLS</h2>
      <ul className="skills__list">
        <li className="skills__list-item">HTML</li>
        <li className="skills__list-item">CSS</li>
        <li className="skills__list-item">JavaScript</li>
        <li className="skills__list-item">ES6</li>
        <li className="skills__list-item">Git</li>
        <li className="skills__list-item">GitHub</li>
        <li className="skills__list-item">React </li>
        <li className="skills__list-item">Node.js </li>
        <li className="skills__list-item">API_REST </li>
        <li className="skills__list-item">Autenticação </li>
        <li className="skills__list-item">Autorização </li>
        <li className="skills__list-item">Express.js </li>
        <li className="skills__list-item">MongoDB </li>
      </ul>
      <Button buttonType="downloadResume"></Button>
    </div>
  </section>
);

export default SkillsPage;
