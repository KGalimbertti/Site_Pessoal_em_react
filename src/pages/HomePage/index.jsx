import homeIcon from "../../assets/icons/Download.png";
import "./home.css";

const HomePage = () => (
  <section className="home" id="home">
    <div className="home__image"></div>
    <div>
      <div className="home__description">
        <h1 className="home__title">KAUÊ GALIMBERTTI</h1>
        <h2 className="home__ocupation">Desenvolvedor Front-end</h2>
        <div className="home__button">
          <img className="home__icon" src={homeIcon} alt="" />
          <a
            href="./sources/Currículo Kauê.pdf"
            download="Currículo Kauê.pdf"
            className="home__button-description"
          >
            Baixar currículo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
