import { useState } from "react";
import { contactData } from "../data";
import { Fade } from "@mui/material";
import "./portfolio.css";

const Contact = () => {

  const { email, linkedin, github } = contactData;

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}`;

  const [selectedLink, setSelectedLink] = useState(null);

  const handleMobileClick = (e, link) => {

    if (window.innerWidth <= 768) {

      e.preventDefault(); // stop instant open
      setSelectedLink(link);

    }

  };

  const openLink = () => {

    if (selectedLink) {
      window.open(selectedLink, "_blank", "noopener,noreferrer");
      setSelectedLink(null);
    }

  };

  return (

<section id="contact" className="section-wrapper">


      <h2 className="section-title">CONTACT</h2>

      <Fade in={true} timeout={800}>

        <div className="contact-container">

          <a
            href={gmailLink}
            onClick={(e) => handleMobileClick(e, gmailLink)}
            className="contact-icon"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" />
            <span>Gmail</span>
          </a>

          <a
            href={linkedin}
            onClick={(e) => handleMobileClick(e, linkedin)}
            className="contact-icon"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

          <a
            href={github}
            onClick={(e) => handleMobileClick(e, github)}
            className="contact-icon"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <span>GitHub</span>
          </a>

        </div>

      </Fade>

      {/* Confirmation Modal */}
      {selectedLink && (

        <div className="contact-modal-overlay">

          <div className="contact-modal">

            <p>Open this link?</p>

            <div className="contact-modal-buttons">

              <button
                className="contact-open-btn"
                onClick={openLink}
              >
                Open Link
              </button>

              <button
                className="contact-cancel-btn"
                onClick={() => setSelectedLink(null)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );

};

export default Contact;
