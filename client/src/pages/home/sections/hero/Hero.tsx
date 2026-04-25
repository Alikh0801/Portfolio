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
        <h1 className="hero__title">
          Modern, fast and clean <span className="hero__accent">portfolio</span>{" "}
          experiences
        </h1>
      </div>
    </section>
  );
}
