import { heroData } from "../data";
import { Fade, Box, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "./portfolio.css";

const Hero = () => {
  const { name, role, description, social, resume } = heroData;

  if (!name) return null;

  // Direct Gmail compose link
  const gmailCompose = `https://mail.google.com/mail/?view=cm&to=${social.email}`;

  return (
    <section id="home" className="hero-wrapper">

      <Fade in={true} timeout={1000}>
        <Box className="hero-container">
          
          <h1 className="hero-title">{name}</h1>
          <h2 className="hero-subtitle">{role}</h2>
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
  <Button
    className="primary-btn"
    href="#projects"
  >
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
