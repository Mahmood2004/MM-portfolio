import React from "react";
import styles from "./hero.module.css";
import profilePic from "../../assets/profile_pic.png";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Home Section */}
      <section className={styles.hero} id="home">
        <div style={{ alignContent: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span style={{ color: "#4315cdc9" }}>Mahmood</span>
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frontend Developer specializing in React
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            and focusing on building fast, responsive, user-focused web
            applications.
          </motion.p>
          <div className={styles.buttonsWrapper}>
            <motion.button
              className={styles.ctaButton}
              onClick={() => scrollToSection("contact")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get in Touch <FaArrowRight style={{ marginLeft: "8px" }} />
            </motion.button>
            <motion.a
              href="/Mahmod-Mohamad_CV.pdf"
              download
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Download CV <FaDownload style={{ marginLeft: "8px" }} />
            </motion.a>
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <img
            src={profilePic}
            alt="profile image"
            className={styles.profilePic}
          />
        </div>
      </section>
    </>
  );
}
