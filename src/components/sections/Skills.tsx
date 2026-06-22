import React from "react";
import SectionWrapper from "../ui/SectionWrapper";

const skills = [
  "C", "C++", "Embedded C", "ARM Cortex", "ESP32", "STM32",
  "FreeRTOS", "AUTOSAR", "MQTT", "IoT", "Python", "Git",
  "Rust", "Linux", "Yocto", "Zephyr RTOS"
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="skills__grid">
        {skills.map((skill) => (
          <span key={skill} className="skills__tag">{skill}</span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;