import { aboutData } from "../data";
import { Fade } from "@mui/material";
import "./portfolio.css";

const About = () => {
  const { personalInfo, education, certifications } = aboutData;

  return (
    <section id="about" className="section-wrapper">
      <h2 className="section-title">ABOUT ME</h2>

      <div className="about-grid">

        
        <Fade in={true} timeout={600}>
          <div className="about-card">
            <h3 className="about-card-title">Personal Information</h3>
            <ul className="about-list">
              <li><strong>Name:</strong> {personalInfo.name}</li>
              <li><strong>DOB:</strong> {personalInfo.dob}</li>
              <li><strong>Location:</strong> {personalInfo.location}</li>
              <li><strong>Email:</strong> {personalInfo.email}</li>
            </ul>
          </div>
        </Fade>

      
        <Fade in={true} timeout={800}>
          <div className="about-card">
            <h3 className="about-card-title">Education</h3>
            <ul className="about-list">
              {education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.degree}</strong><br />
                  {edu.college} <br />
                  <span className="about-year">{edu.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

       
        <Fade in={true} timeout={1000}>
          <div className="about-card">
            <h3 className="about-card-title">Certifications & Internship</h3>
            <ul className="about-list">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <strong>{cert.name}</strong> <br />
                  {cert.org} <br />
                  <span className="about-year">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

      </div>
    </section>
  );
};

export default About;
