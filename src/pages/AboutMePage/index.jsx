import aboutIcon from "../../assets/icons/linkedin.png";
import Button from "../../components/Button";
import "./about.css";

const AboutMePage = () => (
  <section className="about" id="about">
    <div className="about__description-container">
      <div className="about__description">
        <h2 className="about__title">SOBRE MIM</h2>
        <p className="about__history">
          Desenvolvedor Frontend com foco em HTML, CSS e JavaScript. Sempre tive
          curiosidade de entender como os sistemas funcionam e a vontade de
          resolver problemas de forma criativame motivou a iniciar a minha
          migração de carreira para tecnologia.
          <br />
          <br />
          Estudo por meio de bootcamps, cursos online e faculdade de ADS e sigo
          aprofundando meus conhecimentos com projetos práticos publicados no
          GitHub. Minha trajetória anterior foi na área de administração e
          gestão de pessoas, onde atuei como sócio-administrador. Essa
          experiência me trouxe habilidades como resolução de problemas, tomada
          de decisão, liderança de equipes e comunicação (que espero empregar na
          minha atuação na área de tecnologia).
          <br />
          <br />
          Neste momento, busco uma oportunidade como desenvolvedor júnior para
          aplicar meus conhecimentos técnicos, seguir evoluindo na prática e
          contribuir com projetos desafiadores dentro de bons times de
          tecnologia.
        </p>
        <Button buttonType="linkedin"></Button>
      </div>
    </div>
    <div className="about__photo"></div>
  </section>
);

export default AboutMePage;
