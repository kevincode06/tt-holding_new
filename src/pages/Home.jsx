import { Link } from "react-router-dom";
import {
  company,
  images,
  vision,
  about,
  disciplines,
  services,
  stats,
  values,
  founder,
} from "../data/content.js";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{ "--hero-img": `url("${images.hero}")` }}
      >
        <div className="container hero__content">
          <p className="eyebrow">Bienvenu chez</p>
          <h1>{company.name}</h1>
          <p className="hero__slogan">{company.slogan}</p>
          <p className="hero__text">
            Cabinet de conseil et de construction en ingénierie civile,
            structurelle, électrique et mécanique.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn">
              Nos services
            </Link>
            <a href="#contact" className="btn btn--ghost">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      {/* DISCIPLINES STRIP */}
      <section className="strip">
        <div className="container strip__grid">
          {disciplines.map((d) => (
            <article className="strip__item" key={d.title}>
              <span className="strip__icon">{d.icon}</span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISION + QUI SOMMES-NOUS */}
      <section className="section">
        <div className="container two-col">
          <div className="about__media">
            <img src={images.about} alt="Chantier TT Holding" />
            <div className="about__badge">
              <strong>67+</strong>
              <span>ans d'expérience cumulée</span>
            </div>
          </div>
          <div>
            <p className="kicker">Qui sommes-nous ?</p>
            <h2 className="section__title">Notre vision</h2>
            <p className="lead">{vision}</p>
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link to="/services" className="btn">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section--alt">
        <div className="container">
          <p className="kicker center">Notre offre de service</p>
          <h2 className="section__title center">Ce que nous faisons</h2>
          <div className="grid grid--4">
            {services.slice(0, 4).map((s, i) => (
              <article className="card card--service" key={s.title}>
                <span className="card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="card__icon">{s.icon}</span>
                <h3>{s.title}</h3>
              </article>
            ))}
          </div>
          <div className="center mt">
            <Link to="/services" className="btn">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="counters">
        <div className="container counters__grid">
          {stats.map((s) => (
            <div className="counter" key={s.label}>
              <span className="counter__value">
                {s.value}
                {s.suffix && <small>{s.suffix}</small>}
              </span>
              <span className="counter__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="section">
        <div className="container">
          <p className="kicker center">Ce qui nous guide</p>
          <h2 className="section__title center">Nos valeurs</h2>
          <div className="grid grid--3">
            {values.map((v) => (
              <article className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section
        className="quote"
        style={{ "--quote-img": `url("${images.quote}")` }}
      >
        <div className="container narrow center">
          <blockquote>« {founder.quote} »</blockquote>
          <p className="quote__author">
            {founder.name} — {founder.role}
          </p>
        </div>
      </section>
    </>
  );
}
