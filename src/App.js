import Navbar from "./components/navbar/Navbar";
import Home from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
