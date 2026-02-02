import "./App.css";
import "./index.css";
import { NavBar } from "./components/navBar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/project/project";
import { Skills } from "./components/skills/skills";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
