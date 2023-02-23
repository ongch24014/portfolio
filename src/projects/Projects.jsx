import React from "react";
import { projectsData } from "./projects-data";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <span
        className="main-title animate__animated"
        style={{ textAlign: "center" }}
        id="experience1"
      >
        Projects
      </span>
      <div className="projects-list animate__animated">
        {projectsData.map((project) => (
          <div key={project.title} className="project">
            <div className="project-header">
              <span>{project.title}</span>
              <span className="">{project.date}</span>
            </div>
            <div className="project-languages">
              {project.languages.map((lang) => (
                <span>{lang}</span>
              ))}
            </div>
            <GitHubIcon className="project-gh"></GitHubIcon>
          </div>
        ))}
      </div>
      <div className="curve"></div>
    </div>
  );
};

export default Projects;
