import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { achievements } from "../../data/achievements";

const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications">
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.id}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {ach.image && (
              <div className="achievement-image">
                <img src={ach.image} alt={ach.title} />
              </div>
            )}
            <div className="achievement-content">
              <div className="achievement-icon">{ach.icon || "⭐"}</div>
              <h3 className="achievement-title">{ach.title}</h3>
              <div className="achievement-meta">
                <span className="achievement-org">{ach.organization}</span>
                <span className="achievement-year">{ach.year}</span>
              </div>
              <p className="achievement-description">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;