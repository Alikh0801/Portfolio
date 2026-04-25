import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">Web Development</p>
        <h1 className="hero__title">
          Modern, fast and clean <span className="hero__accent">portfolio</span>{" "}
          experiences
        </h1>
        <p className="hero__subtitle">
          Qara + tünd portağal palitrası ilə professional UI, diqqət mərkəzində
          performans və detail.
        </p>
        <div className="hero__actions">
          <a className="hero__primary" href="#products">
            View products
          </a>
          <a className="hero__secondary" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
