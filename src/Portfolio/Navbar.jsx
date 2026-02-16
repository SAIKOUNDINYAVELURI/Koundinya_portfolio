import { useState, useEffect } from "react";
import "./portfolio.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     NAVBAR SHRINK EFFECT
  ========================= */
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  /* =========================
     SCROLL PROGRESS BAR
  ========================= */
  useEffect(() => {

    const updateScrollProgress = () => {

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      const progressBar =
        document.querySelector(".scroll-progress-bar");

      if (progressBar) {
        progressBar.style.width = progress + "%";
      }

    };

    window.addEventListener("scroll", updateScrollProgress);

    return () =>
      window.removeEventListener("scroll", updateScrollProgress);

  }, []);


  /* =========================
     CLOSE MENU AFTER CLICK
  ========================= */
  const handleNavClick = () => {
    setMenuOpen(false);
  };


  return (
    <>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar"></div>
      </div>


      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "navbar-shrink" : ""}`}>

        {/* LEFT SIDE NAME */}
        <div className="navbar-left">

          <a
            href="#home"
            className="navbar-name"
            onClick={handleNavClick}
          >
            Sai Koundinya Veluri
          </a>

        </div>


        {/* RIGHT SIDE */}
        <div className="navbar-right">

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>


          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

            <li>
              <a href="#home" onClick={handleNavClick}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={handleNavClick}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={handleNavClick}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>

          </ul>

        </div>

      </nav>

    </>
  );

};

export default Navbar;
