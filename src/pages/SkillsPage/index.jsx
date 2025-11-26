import skillsIcon from "../../assets/icons/Download.png";
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
      </ul>
      <div className="skills__button">
        <img className="skills__icon" src={skillsIcon} alt="" />
        <a
          href="./sources/Currículo Kauê.pdf"
          download="Currículo Kauê.pdf"
          className="skills__button-description"
        >
          Baixar currículo completo
        </a>
      </div>
    </div>
  </section>
);

export default SkillsPage;
