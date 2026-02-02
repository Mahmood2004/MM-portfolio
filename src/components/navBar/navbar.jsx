import styles from "./navbar.module.css";
import React, { useState, useEffect } from "react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];

      const navbar = document.querySelector(".navbar");
      const offset = navbar ? navbar.offsetHeight + 10 : 120;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div
          className={styles.navbarName}
          onClick={() => {
            scrollToSection("home");
            setMenuOpen(false);
          }}
        >
          <p>&lt;Mahmood /&gt;</p>
        </div>

        {/* menu button (mobile only) */}
        <div
          className={`${styles.codeToggle} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.angle} ${styles.left}`}>&lt;</span>
          <span className={styles.slash}>/</span>
          <span className={`${styles.angle} ${styles.right}`}>&gt;</span>
        </div>

        <ul className={`${styles.navbarItems} ${menuOpen ? styles.open : ""}`}>
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                    setMenuOpen(false);
                  }}
                  className={activeSection === item ? styles.active : ""}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>
    </>
  );
}
