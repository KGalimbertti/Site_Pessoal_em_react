import emailIcon from "../../assets/icons/Email.png";
import whatsAppIcon from "../../assets/icons/Whatsapp.png";
import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import gitHubIcon from "../../assets/icons/github.png";
import "./contact.css";

const ContactPage = () => (
  <section className="contact" id="contact">
    <div className="contact__container">
      <div className="contacts__photo"></div>
      <div className="contact__description">
        <h2 className="contact__title">CONTATO</h2>
        <p className="contact__text">
          Gostaria de bater um papo comigo? Vou deixar todas as minhas formas de
          contato e redes sociais listadas abaixo.
        </p>
        <address className="contact__address">
          <div className="contact__email">
            <img src={emailIcon} alt="Email" />
            <p className="contact__text-icon">kaue_mamprim@hotmail.com</p>
          </div>
          <div className="contact__phone">
            <img src={whatsAppIcon} alt="Whatsapp" />
            <p className="contact__text-icon">+55 (11) 9 9997-9199</p>
          </div>
        </address>
        <div className="contact__midias">
          <a
            href="https://www.linkedin.com/in/kauegalimbertti/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/KGalimbertti" target="_blank">
            <img src={gitHubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
