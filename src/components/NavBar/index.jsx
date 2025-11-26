import headerIcon from "../../assets/icons/home.png";
import "./header.css";

const NavBar = () => (
  <header className="header">
    <nav>
      <img className="header__image" src={headerIcon} alt="Casa" />
      <ul className="header__list">
        <li className="header__list-item">
          <a href="#about">Sobre mim</a>
        </li>
        <li className="header__list-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="header__list-item">
          <a href="#projects">Projetos</a>
        </li>

        <li className="header__list-item">
          <a href="#contact">
            <b>Contato</b>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
