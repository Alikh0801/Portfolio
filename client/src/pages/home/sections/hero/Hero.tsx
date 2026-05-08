import "./Hero.css";
import { Header } from "../../../../components/layout/header";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__header">
        <Header />
      </div>
      <div className="hero__content">
        <span className="hero__eyebrow">
          <span className="hero__eyebrowDot" aria-hidden="true" />
          Available for new projects
        </span>

        <h1 className="hero__title">
          Modern, fast and clean <span className="hero__accent">portfolio</span>{" "}
          experiences
        </h1>

        <p className="hero__subtitle">
          Full‑stack web developer focused on performant interfaces, scalable
          architecture, and clean, maintainable code.
        </p>

        <div className="hero__actions">
          <a className="hero__primary" href="#contact">
            Let’s talk
          </a>
        </div>

        <ul className="hero__meta" aria-label="Profile highlights">
          <li>
            <span className="hero__metaLabel">Stack</span>
            <span className="hero__metaValue">React · Node.js · TS</span>
          </li>
          <li>
            <span className="hero__metaLabel">Based in</span>
            <span className="hero__metaValue">Baku, AZ</span>
          </li>
          <li>
            <span className="hero__metaLabel">Status</span>
            <span className="hero__metaValue">Open to work</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
