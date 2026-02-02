import React from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      {/* About Section */}
      <section className={styles.about} id="about">
        <div className={styles.aboutTitle}>
          <h1>About Me</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.aboutText}>
          <p className={styles.introText}>
            I'm a Web Developer focused on building secure, scalable, and
            user-friendly web applications. Experienced in both frontend and
            backend development, with a strong focus on clean architecture,
            performance optimization, and responsive design.
          </p>
          <p>
            Backed by a solid foundation in cybersecurity, including Cisco
            certifications in Introduction to Cybersecurity and Cybersecurity
            Essentials, enabling the development of web applications with
            security best practices in mind.
          </p>
          <div className={styles.experienceHighlights}>
            <div className={styles.highlightCard}>
              <h3>50%</h3>
              <p>Performance Improvement</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
