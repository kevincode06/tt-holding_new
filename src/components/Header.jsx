import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { company } from "../data/content.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>📍 {company.address}</span>
          <span className="topbar__right">
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
              📞 {company.phones[0]}
            </a>
            <a href={`mailto:${company.email}`}>✉️ {company.email}</a>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand" onClick={close}>
            <img
              src={logo}
              alt={`${company.name} logo`}
              className="brand__logo"
            />
            <span className="brand__name">{company.name}</span>
          </Link>

          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${open ? "nav--open" : ""}`}>
            <NavLink to="/" end onClick={close}>
              Accueil
            </NavLink>
            <NavLink to="/services" onClick={close}>
              Services &amp; Projets
            </NavLink>
            <a href="#contact" className="btn btn--small" onClick={close}>
              Contactez-nous
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
