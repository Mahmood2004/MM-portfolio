import React from "react";
import styles from "./project.module.css";
import { motion } from "framer-motion";
import restaurant from "../../assets/restaurant.jpg";
import wardrobe from "../../assets/wardrobe.png";


export function Projects() {
    const projects = [
      {
        id: 1,
        title: "3D-wARdrobe",
        description:
          "3D-wARdrobe is a web application that enhances e-commerce through a 3D virtual fitting room, allowing users to visualize clothing digitally and experience a more immersive online shopping journey.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "#",
        image: wardrobe,
      },
      {
        id: 2,
        title: "Restaurant Website",
        description:
          "A user-friendly web project that displays the restaurant’s menu, services, and contact information to help customers easily explore and connect with the business.",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
        github: "#",
        image: restaurant,
      },
    ];
  return (
    <>
      {/* Project Section */}
      <section className={styles.projects} id="projects">
        <div className={styles.projectTitle}>
          <h1>Featured Projects</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
