import "./Header.css";

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
  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <a
          className="siteHeader__brand"
          href="#top"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollToHash("#top");
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
                smoothScrollToHash(item.href);
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
              smoothScrollToHash("#about");
            }}
          >
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  );
}
