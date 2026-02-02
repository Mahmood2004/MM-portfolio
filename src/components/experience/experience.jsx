import React from "react";
import styles from "./experience.module.css";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <>
      {/* Experience Section */}
      <section className={styles.experience} id="experience">
        <h3>Professional Experience</h3>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>Sep 2025 - Nov 2025</div>
            <h4>Freelance Web Developer</h4>
            <p>Self-Employed | Remote</p>
            <ul>
              <li>Designed and developed custom websites and web features</li>
              <li>Implemented frontend and backend solutions</li>
              <li>
                Ensured security, performance, and scalability best practices
              </li>
            </ul>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>Nov 2024 - Jun 2025</div>
            <h4>Web Developer (Full Stack)</h4>
            <p>StoreZon | Remote</p>
            <ul>
              <li>
                Optimized website performance, reducing load times by 50%.
              </li>
              <li>
                Developed and maintained responsive web applications using HTML,
                CSS, JavaScript.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                user-friendly interfaces.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
