import React from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

export function Contact() {
  return (
    <>
      {/* Contact Section*/}
      <section className={styles.contact} id="contact">
        <div className={styles.contactTitle}>
          <h1>Get In Touch</h1>
          <div className={styles.underline}></div>
          <p>Have a project in mind? Let's build something amazing together!</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <h3>Email</h3>
                <a href="mailto:mahmoudnasermhmd@gmail.com">
                  mahmoudnasermhmd@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.contactCard}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <h3>Phone</h3>
                <a href="tel:+96176951671">+961 76 951 671</a>
              </div>
            </div>
            <div className={styles.contactCard}>
              <FaLinkedin className={styles.contactIcon} />
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/mahmood-mohamad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mahmood-mohamad/
                </a>
              </div>
            </div>
            <div className={styles.contactCard}>
              <FaGithub className={styles.contactIcon} />
              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Mahmood2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Mahmood2004
                </a>
              </div>
            </div>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
