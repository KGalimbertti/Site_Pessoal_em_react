import "./button.css";
import homeIcon from "../../assets/icons/Download.png";
import aboutIcon from "../../assets/icons/linkedin.png";

const Button = ({ buttonType }) => {
  const getButtonProps = () => {
    switch (buttonType) {
      case "downloadResume":
        return {
          icon: homeIcon,
          href: "./sources/Currículo Kauê.pdf",
          download: "Currículo Kauê.pdf",
          buttonText: "Baixar Currículo",
          colorClass: "home__button",
        };

      case "linkedin":
        return {
          icon: aboutIcon,
          href: "https://www.linkedin.com/in/kauegalimbertti/",
          download: null,
          buttonText: "Confira meu LinkedIn",
          colorClass: "about__button",
        };

      default:
        break;
    }
  };

  return (
    <div className={`home__button ${getButtonProps().colorClass}`}>
      <img className="home__icon" src={getButtonProps().icon} alt="" />
      <a
        href={getButtonProps().href}
        download={getButtonProps().download}
        target={getButtonProps().download ? null : "_blank"}
        className="home__button-description"
      >
        {getButtonProps().buttonText}
      </a>
    </div>
  );
};

export default Button;
