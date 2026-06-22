import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { personalInfo } from "../../data/personalInfo";

const skills = [
  "C", "C++", "Embedded C", "ARM Cortex", "STM32", "ESP32",
  "FreeRTOS", "AUTOSAR", "MQTT", "IoT", "Python", "Git",
  "Yocto", "U-Boot", "Linux Kernel", "Qt", "CMake", "UART/SPI/I2C"
];

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="about__grid">

        {/* Left column — Bio & Social */}
        <div className="about__content">
          <h3 className="about__heading">Get to know me!</h3>

          <p className="about__bio">
            Hey! I'm <strong>Houssem Jarray</strong>, an{" "}
            <strong>Embedded Software Engineer</strong> with a degree in
            Industrial Computer Engineering from{" "}
            <strong>ENET'COM Sfax</strong>, specializing in intelligent and
            interconnected systems.
          </p>

          <p className="about__bio">
            I have hands-on experience in <strong>C/C++</strong>,{" "}
            <strong>STM32</strong> microcontrollers, and communication
            protocols like <strong>UART, SPI, I2C, and Modbus</strong>. I'm
            particularly interested in <strong>custom embedded Linux</strong>{" "}
            systems — working with Yocto, U-Boot, and custom kernel builds.
          </p>


          <div className="about__social">
            <a
              href="https://github.com/Houssem-Jarray"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {personalInfo.social.twitter && (
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
          </div>
        </div>

        {/* Right column — Skills */}
        <div className="about__skills-col">
          <h3 className="about__heading">My Skills</h3>
          <div className="about__skills">
            {skills.map((skill) => (
              <span key={skill} className="about__skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;