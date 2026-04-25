import "./Home.css";
import { Hero } from "./sections/hero";

export function Home() {
  return (
    <div>
      <Hero />

      <main className="home">
        <section id="products" className="home__section">
          <h2 className="home__title">Products</h2>
          <p className="home__text">
            Burada sonra məhsullar bölməsini yığarıq.
          </p>
        </section>
        <section id="contact" className="home__section">
          <h2 className="home__title">Contact</h2>
          <p className="home__text">Burada sonra əlaqə formu əlavə edərik.</p>
        </section>
      </main>
    </div>
  );
}
