import { Link } from "react-router-dom";
import { company } from "../data/content.js";

export default function Footer() {
  return (
    <>
      <section className="cta">
        <div className="container cta__inner">
          <h2>Un projet en tête ? Parlons-en.</h2>
          <a href={`mailto:${company.email}`} className="btn btn--dark">
            Écrivez-nous
          </a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer__grid">
          <div>
            <h3 className="footer__brand">{company.name}</h3>
            <p className="footer__slogan">{company.slogan}</p>
            <p>
              Cabinet de conseil et de construction en ingénierie civile,
              structurelle, électrique et mécanique.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul className="footer__list">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/services">Services &amp; Projets</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contactez-nous</h4>
            <ul className="footer__list">
              <li>📍 {company.address}</li>
              {company.phones.map((p) => (
                <li key={p}>
                  📞 <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                </li>
              ))}
              <li>
                ✉️ <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} {company.name}. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
