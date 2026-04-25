import { projects } from "../../data/projects";
import "./Home.css";
import { Hero } from "./sections/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Home() {
  return (
    <div>
      <Hero />

      <main className="home">
        <section id="products" className="home__section">
          <div className="home__sectionHead">
            <h2 className="home__title">Projects</h2>
            <p className="home__text">
              I am presenting to you my personal and company-internal work.
            </p>
          </div>

          <div className="projectsSwiper">
            <Swiper
              modules={[Navigation, Pagination, A11y, Keyboard]}
              spaceBetween={16}
              slidesPerView={1}
              autoHeight
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              watchOverflow
              breakpoints={{
                980: { slidesPerView: 1 },
              }}
            >
              {projects.map((p) => (
                <SwiperSlide key={p.title}>
                  <article className="projectSection">
                    <div className="projectSection__left">
                      <div className="projectSection__media">
                        <img src={p.imageUrl} alt={p.title} loading="lazy" />
                      </div>
                      <p className="projectSection__desc">{p.description}</p>

                      <div className="projectSection__work">
                        <h4 className="projectSection__workTitle">
                          Responsibilities
                        </h4>
                        <ul className="projectSection__list">
                          {p.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="projectSection__content">
                      <div className="projectSection__head">
                        <div className="projectSection__headText">
                          <h3 className="projectSection__title">{p.title}</h3>
                          <div className="projectSection__submeta">
                            <span className="projectMeta__label">
                              Project:{" "}
                            </span>
                            <span className="projectSection__submetaValue">
                              {p.type === "company"
                                ? `Company — ${p.companyName ?? "NDA"}`
                                : "Personal"}
                            </span>
                          </div>
                        </div>
                        <a
                          className="projectSection__cta"
                          href={p.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live site
                        </a>
                      </div>

                      <div className="projectSection__meta">
                        <div className="projectMeta projectMeta--stack">
                          <span className="projectMeta__label">
                            Technologies & Libraries:
                          </span>
                          <div className="projectSection__tags">
                            {p.technologies.map((t) => (
                              <span key={t} className="projectTag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="about" className="home__section">
          <div className="home__sectionHead">
            <h2 className="home__title">About me</h2>
            <p className="home__text">
              I build modern, performant web applications with clean UI and
              scalable architecture.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
