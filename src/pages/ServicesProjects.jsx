import { images, servicesIntro, services, projects } from "../data/content.js";

export default function ServicesProjects() {
  return (
    <>
      <section
        className="page-hero"
        style={{ "--page-img": `url(${images.pageHero})` }}
      >
        <div className="container">
          <h1>Services &amp; Projets</h1>
          <p>Notre expertise au service du développement de l'Afrique.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <p className="kicker">Notre offre de service</p>
          <h2 className="section__title">Nos domaines d'expertise</h2>
          <p className="lead narrow-left">{servicesIntro}</p>
          <div className="grid grid--4 no-top">
            {services.map((s, i) => (
              <article className="card card--service" key={s.title}>
                <span className="card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="card__icon">{s.icon}</span>
                <h3>{s.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="section section--alt">
        <div className="container">
          <p className="kicker">Nos références</p>
          <h2 className="section__title">Projets réalisés</h2>
          <div className="grid grid--2">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project__img">
                  <img src={p.image} alt={p.title} />
                  <span className="project__figure">{p.figure}</span>
                </div>
                <div className="project__body">
                  <p className="project__client">{p.client}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
