import { skillsData } from "../data";
import { Fade } from "@mui/material";
import "./portfolio.css";

const Skills = () => {
  if (!skillsData || skillsData.length === 0) return null;

  return (
    <section id="skills" className="section-wrapper">
      <h2 className="section-title">SKILLS</h2>

      {skillsData.map((section, index) => (
        <Fade in={true} timeout={700 + index * 200} key={index}>
          <div className="skills-section">
            <h3 className="skills-heading">{section.category}</h3>

            <div className="skills-grid">
              {section.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      ))}
    </section>
  );
};

export default Skills;
