import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> 
      <Skills />   
      <Projects />
      <Contact/>
    </div>
  );
};

export default Portfolio;
