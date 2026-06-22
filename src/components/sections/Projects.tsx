import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {project.image && (
              <div className="project__image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="project__content">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="project__tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project__links">
                {project.githubLink && (
                  <a href={project.githubLink} className="project__link">
                    GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} className="project__link project__link--demo">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;