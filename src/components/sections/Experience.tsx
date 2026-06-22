import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { experiences } from "../../data/experience";

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
              </div>
              <div className="exp-meta">
                <span className="exp-period">{exp.period}</span>
                {exp.location && (
                  <span className="exp-location">{exp.location}</span>
                )}
              </div>
            </div>
            <ul className="exp-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
