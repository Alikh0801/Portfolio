import "./Header.css";
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "About me", href: "#about" },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function animateWindowScrollTo(targetY: number, durationMs = 550) {
  const startY = window.scrollY || window.pageYOffset || 0;
  const delta = targetY - startY;
  if (Math.abs(delta) < 2) return;

  const start = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const y = startY + delta * easeOutCubic(t);
    window.scrollTo(0, y);
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function smoothScrollToHash(hash: string) {
  if (hash === "#top") {
    animateWindowScrollTo(0);
    history.pushState(null, "", "#top");
    return;
  }

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const targetY = rect.top + (window.scrollY || window.pageYOffset || 0);
  animateWindowScrollTo(targetY);
  history.pushState(null, "", `#${id}`);
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const onNavClick = (hash: string) => {
    smoothScrollToHash(hash);
    setMenuOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <a
          className="siteHeader__brand"
          href="#top"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("#top");
          }}
        >
          <span className="siteHeader__brandMark" aria-hidden="true" />
          <span className="siteHeader__brandName">
            Ali<span className="siteHeader__brandAccent">Kheirkheberli</span>
          </span>
        </a>
        <nav className="siteHeader__nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="siteHeader__link"
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="siteHeader__actions">
          <a
            className="siteHeader__cta"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("#about");
            }}
          >
            Let’s talk
          </a>

          <button
            type="button"
            className="siteHeader__menuBtn"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="siteHeader__menuIcon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`siteHeader__mobileOverlay ${
          menuOpen ? "siteHeader__mobileOverlay--open" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="siteHeader__mobilePanel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="siteHeader__mobileTop">
            <span className="siteHeader__mobileTitle">Menu</span>
            <button
              type="button"
              className="siteHeader__mobileClose"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="siteHeader__mobileNav" aria-label="Mobile primary">
            {nav.map((item) => (
              <a
                key={item.href}
                className="siteHeader__mobileLink"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
