import gitHubIcon from "../../assets/icons/github.png";
import "./projects.css";

const ProjectsPage = () => (
  <section className="projects" id="projects">
    <h2>PROJETOS</h2>
    <div class="project__cards">
      <div class="project__card">
        <h3 class="project__card-title">Prompts Manager</h3>
        <p class="project__card-description">
          O Prompt Manager é uma aplicação web prática e intuitiva que permite
          organizar todos os seus prompts de Inteligência Artificial em um só
          lugar.
        </p>
        <div class="project__button">
          <img class="project__icon" src={gitHubIcon} alt="GitHub" />
          <a
            href="https://kgalimbertti.github.io/prompts_manager/"
            target="_blank"
            class="project__button-description"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
      <div class="project__card">
        <h3 class="project__card-title">Social Links</h3>
        <p class="project__card-description">
          O card de perfil social foi criado para facilitar a apresentação de
          informações pessoais e links para redes sociais de forma visualmente
          atraente. Utilizando técnicas avançadas de CSS.
        </p>
        <div class="project__button">
          <img class="project__icon" src={gitHubIcon} alt="GitHub" />
          <a
            href="https://kgalimbertti.github.io/Social_links_Profile/"
            target="_blank"
            class="project__button-description"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
      <div class="project__card">
        <h3 class="project__card-title">Audiobook</h3>
        <p class="project__card-description">
          Este é um projeto de aplicativo web de audiobook criado com HTML, CSS
          e Js. Ele simula a interface de um player de áudio, permitindo ver a
          capa do livro, o título do capítulo e o autor, e fornece controles
          básicos de reprodução.
        </p>
        <div class="project__button">
          <img class="project__icon" src={gitHubIcon} alt="GitHub" />
          <a
            href="https://kgalimbertti.github.io/Audiobook/"
            target="_blank"
            class="project__button-description"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
      <div class="project__card">
        <h3 class="project__card-title">Site Apple Watch</h3>
        <p class="project__card-description">
          Este é um projeto de aplicativo web de página de produto que simula a
          interface de compra de uma pulseira de Apple Watch, focando na
          interatividade e nas opções de cores, tamanhos. Foi construído com
          HTML, CSS e Js.
        </p>
        <div class="project__button">
          <img class="project__icon" src={gitHubIcon} alt="GitHub" />
          <a
            href="https://kgalimbertti.github.io/site_apple_watch/"
            target="_blank"
            class="project__button-description"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
      <div class="project__card">
        <h3 class="project__card-title">Cardápio Digital</h3>
        <p class="project__card-description">
          Um projeto de Single Page Application (SPA) desenvolvido com React
          para simular o cardápio e a navegação de um restaurante.
        </p>
        <div class="project__button">
          <img class="project__icon" src={gitHubIcon} alt="GitHub" />
          <a
            href="https://kgalimbertti.github.io/cardapio_digital/"
            target="_blank"
            class="project__button-description"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsPage;
