import "./Header.css";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <a className="siteHeader__brand" href="#top" aria-label="Home">
          <span className="siteHeader__brandMark" aria-hidden="true" />
          <span className="siteHeader__brandName">
            Ali<span className="siteHeader__brandAccent">Portfolio</span>
          </span>
        </a>
        <nav className="siteHeader__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} className="siteHeader__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="siteHeader__actions">
          <a className="siteHeader__cta" href="#contact">
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  );
}
