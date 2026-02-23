import { heroData } from "../data";
import { Fade, Box, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { useState, useEffect } from "react";
import "./portfolio.css";

const Hero = () => {
  const { name, role, description, social, resume } = heroData;

  // typing animation states
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // typing effect
  useEffect(() => {
    if (!role || role.length === 0) return;

    const currentRole = role[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }

      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % role.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, roleIndex, role]);

  if (!name) return null;

  const gmailCompose = `https://mail.google.com/mail/?view=cm&to=${social.email}`;

  return (
    <section id="home" className="hero-wrapper">

      <Fade in timeout={1000}>
        <Box className="hero-container">

          <h1 className="hero-title">{name}</h1>

          {/* Typing Animation */}
          <h2 className="hero-subtitle">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">{description}</p>

          {/* Social Icons */}
          <div className="hero-icons">

            {social.github && (
              <IconButton component="a" href={social.github} target="_blank">
                <GitHubIcon className="hero-icon" />
              </IconButton>
            )}

            {social.linkedin && (
              <IconButton component="a" href={social.linkedin} target="_blank">
                <LinkedInIcon className="hero-icon" />
              </IconButton>
            )}

            {social.email && (
              <IconButton component="a" href={gmailCompose} target="_blank">
                <MailIcon className="hero-icon" />
              </IconButton>
            )}

          </div>

          {/* Buttons */}
          <div className="hero-buttons">

            <Button className="primary-btn" href="#projects">
              View My Work
            </Button>

            <Button
              className="resume-btn"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>

          </div>

        </Box>
      </Fade>

    </section>
  );
};

export default Hero;