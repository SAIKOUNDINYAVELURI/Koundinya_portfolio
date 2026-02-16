import { useState } from "react";
import { skillsData } from "../data";
import { Fade } from "@mui/material";
import "./portfolio.css";

const Skills = () => {

  const [openIndex, setOpenIndex] = useState(null);

  if (!skillsData || skillsData.length === 0) return null;

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section id="skills" className="section-wrapper">


      <h2 className="section-title">SKILLS</h2>

      {skillsData.map((section, index) => {

        const isOpen = openIndex === index;

        return (

          <Fade in={true} timeout={700 + index * 200} key={index}>

            <div className={`skills-section ${isOpen ? "open" : ""}`}>

              {/* Dropdown Header */}
              <div
                className="skills-heading"
                onClick={() => toggleSection(index)}
              >

                <span>{section.category}</span>

                <div className={`skills-arrow ${isOpen ? "rotate" : ""}`}>
                  ▼
                </div>

              </div>

              {/* Dropdown Content */}
              <div className={`skills-dropdown ${isOpen ? "show" : ""}`}>

                <div className="skills-grid">

                  {section.skills.map((skill, i) => (

                    <div className="skill-card" key={i}>

                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="skill-logo"
                      />

                      <span>{skill.name}</span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </Fade>

        );

      })}

    </section>

  );

};

export default Skills;
