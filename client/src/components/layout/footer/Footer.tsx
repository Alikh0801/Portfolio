import "./Footer.css";

type Contact = {
  id: "email" | "phone" | "linkedin";
  label: string;
  value: string;
  href: string;
};

const contacts: Contact[] = [
  {
    id: "email",
    label: "Email",
    value: "kheirkheberli@gmail.com",
    href: "mailto:kheirkheberli@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+994 55 322 11 21",
    href: "tel:+994553221121",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/Ali Kheirkheberli",
    href: "https://www.linkedin.com/in/ali-kheyirkhabarli-499b6b35b/",
  },
];

function ContactIcon({ id }: { id: Contact["id"] }) {
  if (id === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.75h4V21H3V9.75ZM9 9.75h3.84v1.55h.05c.54-.95 1.85-1.95 3.81-1.95 4.07 0 4.82 2.55 4.82 5.86V21h-4v-4.95c0-1.18-.02-2.7-1.66-2.7-1.66 0-1.92 1.27-1.92 2.6V21H9V9.75Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer" aria-label="Contact">
      <div className="footer__inner">
        <div className="footer__head">
          <span className="footer__sectionIcon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
            </svg>
          </span>
          <h2 className="footer__title">Let’s talk</h2>
          <p className="footer__text">
            Open to freelance projects and full‑time roles. Reach me on any of
            the channels below — I usually reply within 24 hours.
          </p>
        </div>

        <ul className="footer__contacts">
          {contacts.map((c) => (
            <li key={c.id}>
              <a
                className={`contactCard contactCard--${c.id}`}
                href={c.href}
                target={c.id === "linkedin" ? "_blank" : undefined}
                rel={c.id === "linkedin" ? "noreferrer" : undefined}
              >
                <span className="contactCard__icon" aria-hidden="true">
                  <ContactIcon id={c.id} />
                </span>
                <span className="contactCard__body">
                  <span className="contactCard__label">{c.label}</span>
                  <span className="contactCard__value">{c.value}</span>
                </span>
                <span className="contactCard__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__bottom">
          <span className="footer__rights">© {year} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
