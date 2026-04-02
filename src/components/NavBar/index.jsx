import headerIcon from "../../assets/icons/home.png";
import "./header.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="nav-logo">
        <Link to="/">
          <img className="header__image" src={headerIcon} />
        </Link>
      </div>
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/about">Sobre Mim</Link>
        </li>
        <li className="header__list-item">
          <Link to="/skills">Habilidades</Link>
        </li>
        <li className="header__list-item">
          <Link to="/projects">Projetos</Link>
        </li>
        <li className="header__list-item">
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
