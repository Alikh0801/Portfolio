import { useState } from "react";
import { projects } from "../../data/projects";
import {
  aboutProfile,
  education,
  experiences,
  languages,
  skills,
} from "../../data/about";
import "./Home.css";
import { Hero } from "./sections/hero";

const INITIAL_VISIBLE_PROJECTS = 3;

export function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE_PROJECTS;
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hiddenCount = projects.length - INITIAL_VISIBLE_PROJECTS;

  return (
    <div>
      <Hero />

      <main className="home">
        <section id="products" className="home__section">
          <div className="home__sectionHead">
            <span className="home__sectionIcon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M3 12h18" />
              </svg>
            </span>
            <h2 className="home__title">Projects</h2>
            <p className="home__text">
              I am presenting to you my personal and company-internal work.
            </p>
          </div>

          <div className="projectsList">
            {visibleProjects.map((p, index) => (
              <article key={p.title} className="projectCase">
                <div className="projectCase__top">
                  <div className="projectCase__intro">
                    <span className="projectCase__index">
                      {String(index + 1).padStart(3, "0")}
                    </span>
                    <h3 className="projectCase__title">{p.title}</h3>
                    <p className="projectCase__summary">{p.description}</p>
                  </div>

                  <div className="projectCase__actions">
                    <span
                      className={`projectCase__badge ${
                        p.type === "company"
                          ? "projectCase__badge--company"
                          : "projectCase__badge--personal"
                      }`}
                    >
                      {p.type === "company" ? "Company" : "Personal"}
                    </span>
                    {p.type === "company" && p.companyName && (
                      <span className="projectCase__company">
                        {p.companyName}
                      </span>
                    )}
                    <a
                      className="projectCase__link"
                      href={p.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                  </div>
                </div>

                <div className="projectCase__divider" />

                <div className="projectCase__body">
                  <section className="projectCase__block">
                    <h4 className="projectCase__label">About the project</h4>
                    <p className="projectCase__text">{p.description}</p>
                  </section>

                  <section className="projectCase__block">
                    <h4 className="projectCase__label">Responsibilities</h4>
                    <ul className="projectCase__list">
                      {p.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="projectCase__block">
                    <h4 className="projectCase__label">
                      Technologies & Libraries
                    </h4>
                    <div className="projectCase__tags">
                      {p.technologies.map((t) => (
                        <span key={t} className="projectCase__tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            ))}
          </div>

          {hasMoreProjects && (
            <button
              type="button"
              className="projectsMore"
              onClick={() => setShowAllProjects((v) => !v)}
              aria-expanded={showAllProjects}
            >
              {showAllProjects
                ? "Show less"
                : `Show more (${hiddenCount} more)`}
            </button>
          )}
        </section>

        <section id="about" className="home__section">
          <div className="home__sectionHead">
            <span className="home__sectionIcon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
              </svg>
            </span>
            <h2 className="home__title">About me</h2>
            <p className="home__text">
              A short look at my experience, education, skills, and how to reach
              me.
            </p>
          </div>

          <div className="aboutGrid">
            <div className="aboutMain">
              <section className="aboutBlock">
                <h3 className="aboutBlock__label">Experience</h3>
                <ul className="timeline">
                  {experiences.map((exp) => (
                    <li
                      key={exp.role + exp.period}
                      className="timeline__item"
                    >
                      <span className="timeline__period">{exp.period}</span>
                      <div className="timeline__body">
                        <h4 className="timeline__role">{exp.role}</h4>
                        <p className="timeline__company">{exp.company}</p>
                        <p className="timeline__desc">{exp.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="aboutBlock">
                <h3 className="aboutBlock__label">Education</h3>
                <ul className="timeline">
                  {education.map((ed) => (
                    <li
                      key={ed.degree + ed.period}
                      className="timeline__item"
                    >
                      <span className="timeline__period">{ed.period}</span>
                      <div className="timeline__body">
                        <h4 className="timeline__role">{ed.degree}</h4>
                        <p className="timeline__company">{ed.school}</p>
                        <p className="timeline__desc">{ed.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="aboutBlock">
                <h3 className="aboutBlock__label">Technical Skills</h3>
                <ul className="skills">
                  {skills.map((s) => (
                    <li key={s.name} className="skills__item">
                      <span className="skills__name">{s.name}</span>
                      <span className="skills__bar" aria-hidden="true">
                        <span
                          className="skills__fill"
                          style={{ width: `${s.level}%` }}
                        />
                      </span>
                      <span className="skills__level">{s.level}%</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="aboutAside">
              <div className="profileCard">
                <div className="profileCard__avatar" aria-hidden="true">
                  {aboutProfile.avatarUrl ? (
                    <img
                      src={aboutProfile.avatarUrl}
                      alt={aboutProfile.name}
                      loading="lazy"
                    />
                  ) : (
                    aboutProfile.initials
                  )}
                </div>
                <h3 className="profileCard__name">{aboutProfile.name}</h3>
                <p className="profileCard__role">{aboutProfile.role}</p>

                <dl className="profileCard__rows">
                  <div className="profileCard__row">
                    <dt>Location</dt>
                    <dd>{aboutProfile.location}</dd>
                  </div>
                  <div className="profileCard__row">
                    <dt>Experience</dt>
                    <dd>{aboutProfile.experience}</dd>
                  </div>
                  <div className="profileCard__row">
                    <dt>Status</dt>
                    <dd className="profileCard__status">
                      {aboutProfile.status}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="langCard">
                <h3 className="aboutBlock__label">Languages</h3>
                <ul className="langCard__list">
                  {languages.map((l) => (
                    <li key={l.name} className="langCard__item">
                      <span className="langCard__name">{l.name}</span>
                      <span className="langCard__level">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
