import { projectsData } from "../data";
import { Box, Card, CardContent, Chip, Button, Fade } from "@mui/material";
import "./portfolio.css";

const Projects = () => {
  if (!projectsData || projectsData.length === 0) return null; // Edge case

  return (
    <section id="projects" className="section-wrapper">
      <h2 className="section-title">PROJECTS</h2>

      <Box className="projects-grid">
        {projectsData.map((project, index) => (
          <Fade in={true} timeout={800 + index * 200} key={index}>
            <Card className="project-card">
              <CardContent>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <Chip key={i} label={t} className="tech-chip" />
                  ))}
                </div>

                <Button
                  variant="outlined"
                  href={project.link}
                  target="_blank"
                  className="project-button"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </Box>
    </section>
  );
};

export default Projects;
