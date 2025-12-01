import Button from "../../components/Button";
import "./home.css";

const HomePage = () => {
  const resumeDownloadComplete = true;

  return (
    <section className="home" id="home">
      <div className="home__image"></div>
      <div>
        <div className="home__description">
          <h1 className="home__title">KAUÊ GALIMBERTTI</h1>
          <h2 className="home__ocupation">Desenvolvedor Front-end</h2>
          {resumeDownloadComplete ? (
            <Button buttonType="downloadResume">Baixar currículo</Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
