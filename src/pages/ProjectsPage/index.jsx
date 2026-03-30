import gitHubIcon from "../../assets/icons/github.png";
import { useState, useEffect } from "react";
import "./projects.css";

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "KGalimbertti";

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao acessar API");
        return res.json();
      })
      .then((data) => {
        console.log("Dados recebidos:", data);
        if (Array.isArray(data)) {
          const filtered = data.filter((repo) => !repo.fork);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <section className="projects">
        <h2 className="project__title">Carregando...</h2>
      </section>
    );

  return (
    <section className="projects">
      <div className="project__container">
        <h2 className="project__title">Meus Projetos</h2>

        <div className="project__cards">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} className="project__card">
                <h3 className="project__card-title">
                  {repo.name.replace(/-/g, " ")}
                </h3>
                <p style={{ color: "#888", fontSize: "16px" }}>
                  {repo.description || "Projeto disponível no GitHub."}
                </p>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#646cff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Ver Repositório →
                </a>
              </div>
            ))
          ) : (
            <p style={{ marginLeft: "100px" }}>
              Nenhum projeto público encontrado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
