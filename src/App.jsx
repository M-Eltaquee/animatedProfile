import "./app.scss";
import Cursor from "./components/cursor/Curson";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolios from "./components/portfolios/Portfolios";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Cursor />
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="do">
        <Parallax type="do" />
      </section>
      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Parallax type="did" id="did" />
      </section>
      <Portfolios />
      <Contact />
    </>
  );
};

export default App;
