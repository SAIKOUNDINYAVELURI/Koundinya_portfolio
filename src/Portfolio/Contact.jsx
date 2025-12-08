import { contactData } from "../data";
import { Fade } from "@mui/material";
import "./portfolio.css";

const Contact = () => {
  const { email, linkedin, github } = contactData;

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}`;

  return (
    <section id="contact" className="section-wrapper">
      <h2 className="section-title">CONTACT</h2>

      <Fade in={true} timeout={800}>
        <div className="contact-container">

          <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" />
            <span>Gmail</span>
          </a>

          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

          <a href={github} target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <span>GitHub</span>
          </a>

        </div>
      </Fade>
    </section>
  );
};

export default Contact;
