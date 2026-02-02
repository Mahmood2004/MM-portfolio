import "./App.css";
import "./index.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import profilePic from "./assets/profile_pic.png";
import wardrobe from "./assets/wardrobe.png";
import restaurant from "./assets/restaurant.jpg";
import React, { useState, useEffect } from "react";

function App() {
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
      {/* Navbar */}
      <nav className="navbar">
        <div
          className="navbarName"
          onClick={() => {
            scrollToSection("home");
            setMenuOpen(false);
          }}
        >
          <p>&lt;Mahmood /&gt;</p>
        </div>

        {/* menu button (mobile only) */}
        <div
          className={`code-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="angle left">&lt;</span>
          <span className="slash">/</span>
          <span className="angle right">&gt;</span>
        </div>

        <ul className={`navbar-items ${menuOpen ? "open" : ""}`}>
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
                  className={activeSection === item ? "active" : ""}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Home Section */}
      <section className="hero" id="home">
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
          <motion.button
            className="cta-button"
            onClick={() => scrollToSection("contact")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get in Touch <FaArrowRight style={{ marginLeft: "8px" }} />
          </motion.button>
        </div>
        <div className="profile-wrapper">
          <img src={profilePic} alt="profile image" className="profilePic" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="aboutTitle">
          <h1>About Me</h1>
          <div className="underline"></div>
        </div>
        <div className="about-text">
          <p className="intro-text">
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
          <div className="experience-highlights">
            <div className="highlight-card">
              <h3>50%</h3>
              <p>Performance Improvement</p>
            </div>
            <div className="highlight-card">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="highlight-card">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <h3>Professional Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Sep 2025 - Nov 2025</div>
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
          <div className="timeline-item">
            <div className="timeline-date">Nov 2024 - Jun 2025</div>
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

      {/* Project Section */}
      <section className="projects" id="projects">
        <div className="project-title">
          <h1>Featured Projects</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section*/}
      <section className="technologies" id="skills">
        <h2 className="tech-title">Technologies & Tools</h2>
        <div className="underline"></div>
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>

              <p className="tech-name">{tech.name}</p>
              <p className="tech-desc">{tech.desc}</p>

              <div className="tech-bar"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section*/}
      <section className="contact" id="contact">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <div className="underline"></div>
          <p>Have a project in mind? Let's build something amazing together!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:mahmoudnasermhmd@gmail.com">
                  mahmoudnasermhmd@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+96176951671">+961 76 951 671</a>
              </div>
            </div>
            <div className="contact-card">
              <FaLinkedin className="contact-icon" />
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
            <div className="contact-card">
              <FaGithub className="contact-icon" />
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
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mahmood. All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </footer>
    </>
  );
}

export default App;
