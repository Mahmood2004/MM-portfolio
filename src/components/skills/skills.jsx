import React from "react";
import styles from "./skills.module.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export function Skills() {
  const techs = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "#E44D26",
      desc: "Structure and semantics for the web",
      // link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: "#1572B6",
      desc: "Styling, layouts, and responsive design",
      // link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "#F7DF1E",
      desc: "Dynamic behavior and interactivity",
      // link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "#61DAFB",
      desc: "Component-based UI development",
      // link: "https://react.dev/",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      color: "#F05032",
      desc: "Version control system",
      // link: "https://git-scm.com/doc",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      color: "#ffffff",
      desc: "Collaboration & repository hosting",
      // link: "https://github.com/",
    },
  ];
  return (
    <>
      {/* Skills Section*/}
      <section className={styles.technologies} id="skills">
        <h2 className={styles.techTitle}>Technologies & Tools</h2>
        <div className={styles.underline}></div>
        <div className={styles.techGrid}>
          {techs.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.techIcon} style={{ color: tech.color }}>
                {tech.icon}
              </div>

              <p className={styles.techName}>{tech.name}</p>
              <p className={styles.techDesc}>{tech.desc}</p>

              <div className={styles.techBar}></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
