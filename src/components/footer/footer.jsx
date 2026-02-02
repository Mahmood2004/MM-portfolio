import React from "react";
import styles from "./footer.module.css";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Mahmood. All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </footer>
    </>
  );
}
