import { useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const Portfolio = () => {

  /* REVEAL ANIMATION */
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }

        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);


  return (
    <>
      <Navbar />

      <div className="reveal">
        <Hero />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Contact />
      </div>
    </>
  );

};

export default Portfolio;
