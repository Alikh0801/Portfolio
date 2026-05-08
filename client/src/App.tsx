import { Home } from "./pages/home";
import { Footer } from "./components/layout/footer";
import { ScrollToTopButton } from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <div id="top">
      <Home />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
