import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thanks! Your message has been received.");
    e.target.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-bracket">&lt;</span>
            <span>ANIS</span>
            <span className="logo-dot">.</span>
            <span>Dev</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hello">HELLO, I'M</p>

            <h1>
              Subho Bhore
              
            </h1>

            <h2>
              Aspiring <span>Software Engineer</span>
            </h2>

            <p className="hero-description">
              I am a 4th-year BCA student passionate about software development,
              artificial intelligence, web technologies and building modern
              real-world applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View My Projects
                <span>→</span>
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="#" aria-label="GitHub">GitHub</a>
              <span>•</span>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <span>•</span>
              <a href="mailto:yourmail@example.com">Email</a>
            </div>

          </div>

          {/* Code Card */}
          <div className="code-card">

            <div className="code-header">
              <div className="window-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="file-name">
                portfolio.js
              </div>
            </div>

            <div className="code-body">
              <div>
                <span className="line-number">01</span>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span>{" "}
                <span className="code-white">=</span>{" "}
                <span className="code-yellow">{"{"}</span>
              </div>

              <div>
                <span className="line-number">02</span>
                <span className="indent"></span>
                <span className="code-blue">name</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Deep Chand Kundu"
                </span>
                <span className="code-white">,</span>
              </div>

              <div>
                <span className="line-number">03</span>
                <span className="indent"></span>
                <span className="code-blue">role</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Software Engineer"
                </span>
                <span className="code-white">,</span>
              </div>

              <div>
                <span className="line-number">04</span>
                <span className="indent"></span>
                <span className="code-blue">education</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "BCA - 4th Year"
                </span>
                <span className="code-white">,</span>
              </div>

              <div>
                <span className="line-number">05</span>
                <span className="indent"></span>
                <span className="code-blue">focus</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Full Stack + AI"
                </span>
                <span className="code-white">,</span>
              </div>

              <div>
                <span className="line-number">06</span>
                <span className="indent"></span>
                <span className="code-blue">university</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Techno India University"
                </span>
              </div>

              <div>
                <span className="line-number">07</span>
                <span className="code-yellow">{"}"}</span>
              </div>

              <div className="cursor-line">
                <span className="cursor"></span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="section-container">

          <div className="section-heading">
            <span>01</span>
            <div>
              <p className="section-label">WHO I AM</p>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-grid">

            <div className="about-text">
              <p>
                I am <strong>Deep Chand Kundu</strong>, a 4th-year BCA student
                at <strong>Techno India University</strong> with a strong
                interest in software engineering and modern technology.
              </p>

              <p>
                My learning journey includes Java, Python, React, JavaScript,
                SQL, MySQL, web development, artificial intelligence and
                computer vision.
              </p>

              <p>
                I enjoy converting ideas into practical applications and
                continuously improving my programming and problem-solving
                skills.
              </p>

              <p>
                My goal is to start my career as a software engineer and work
                on scalable, useful and innovative software products.
              </p>
            </div>

            <div className="about-cards">

              <div className="info-card">
                <div className="info-icon">🎓</div>
                <div>
                  <h3>Education</h3>
                  <p>BCA — 4th Year</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">💻</div>
                <div>
                  <h3>Primary Focus</h3>
                  <p>Software Engineering</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🤖</div>
                <div>
                  <h3>Interests</h3>
                  <p>AI & Computer Vision</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🌐</div>
                <div>
                  <h3>Development</h3>
                  <p>Full Stack Web Development</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section dark-section">
        <div className="section-container">

          <div className="section-heading">
            <span>02</span>
            <div>
              <p className="section-label">MY TOOLKIT</p>
              <h2>Skills</h2>
            </div>
          </div>

          <div className="skills-grid">

            <div className="skill-category">
              <h3>Frontend</h3>

              <div className="skill-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>JSX</span>
                <span>Vite</span>
                <span>Responsive Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>

              <div className="skill-list">
                <span>Java</span>
                <span>Servlets</span>
                <span>JSP</span>
                <span>JDBC</span>
                <span>REST API</span>
                <span>MySQL</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Programming</h3>

              <div className="skill-list">
                <span>Java</span>
                <span>Python</span>
                <span>C</span>
                <span>OOP</span>
                <span>Data Structures</span>
                <span>Problem Solving</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI & Computer Vision</h3>

              <div className="skill-list">
                <span>Machine Learning</span>
                <span>Deep Learning</span>
                <span>PyTorch</span>
                <span>Computer Vision</span>
                <span>Grad-CAM</span>
                <span>XAI</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>

              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Eclipse</span>
                <span>Google Colab</span>
                <span>Tomcat</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Currently Learning</h3>

              <div className="skill-list">
                <span>Advanced Java</span>
                <span>Advanced React</span>
                <span>System Design</span>
                <span>Cloud</span>
                <span>DevOps</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <div className="section-container">

          <div className="section-heading">
            <span>03</span>
            <div>
              <p className="section-label">WHAT I'VE BUILT</p>
              <h2>Projects</h2>
            </div>
          </div>

          <div className="projects-grid">

            {/* Project 1 */}
            <article className="project-card">

              <div className="project-number">01</div>

              <div className="project-icon">
                🫁
              </div>

              <p className="project-type">
                AI / DEEP LEARNING
              </p>

              <h3>
                Pneumonia Detection & Severity Analysis
              </h3>

              <p>
                A multi-modal deep learning system designed to analyze
                lung medical images and provide pneumonia detection,
                severity analysis and explainable AI visualizations.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>PyTorch</span>
                <span>EfficientNet</span>
                <span>DenseNet</span>
                <span>Swin Transformer</span>
                <span>Grad-CAM++</span>
              </div>

              <div className="project-link">
                View Project →
              </div>

            </article>

            {/* Project 2 */}
            <article className="project-card">

              <div className="project-number">02</div>

              <div className="project-icon">
                🎓
              </div>

              <p className="project-type">
                FULL STACK WEB
              </p>

              <h3>
                Adhyayana — Student Project Management
              </h3>

              <p>
                A student management platform for managing students,
                batches, projects, pending work, project members and
                financial information.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>JSP</span>
                <span>Servlet</span>
                <span>JDBC</span>
                <span>MySQL</span>
                <span>Tomcat</span>
              </div>

              <div className="project-link">
                View Project →
              </div>

            </article>

            {/* Project 3 */}
            <article className="project-card">

              <div className="project-number">03</div>

              <div className="project-icon">
                ⚛️
              </div>

              <p className="project-type">
                REACT DEVELOPMENT
              </p>

              <h3>
                Modern React Applications
              </h3>

              <p>
                Modern responsive web applications built with React,
                reusable components, routing, state management and
                clean user interfaces.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>REST API</span>
              </div>

              <div className="project-link">
                View Project →
              </div>

            </article>

          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section dark-section">
        <div className="section-container">

          <div className="section-heading">
            <span>04</span>
            <div>
              <p className="section-label">MY JOURNEY</p>
              <h2>Education</h2>
            </div>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-date">
                  CURRENT
                </span>

                <h3>
                  Bachelor of Computer Applications
                </h3>

                <h4>
                  Techno India University
                </h4>

                <p>
                  Currently pursuing BCA and focusing on software
                  engineering, programming, web development and
                  artificial intelligence.
                </p>

                <div className="education-tags">
                  <span>Computer Science</span>
                  <span>Programming</span>
                  <span>AI</span>
                  <span>Web Development</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <div className="section-container">

          <div className="section-heading">
            <span>05</span>
            <div>
              <p className="section-label">GET IN TOUCH</p>
              <h2>Contact Me</h2>
            </div>
          </div>

          <div className="contact-grid">

            <div className="contact-info">

              <h3>
                Let's build something
                <span> amazing.</span>
              </h3>

              <p>
                If you have an interesting project, internship opportunity,
                collaboration idea or simply want to connect, feel free
                to send me a message.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <span className="contact-icon">✉</span>

                  <div>
                    <small>Email</small>
                    <a href="mailto:yourmail@example.com">
                      yourmail@example.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">💼</span>

                  <div>
                    <small>LinkedIn</small>
                    <a href="#">
                      linkedin.com/in/your-profile
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">🐙</span>

                  <div>
                    <small>GitHub</small>
                    <a href="#">
                      github.com/your-profile
                    </a>
                  </div>
                </div>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span>→</span>
              </button>

              {message && (
                <p className="success-message">
                  ✓ {message}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">
            <span>&lt;</span>
            Deep.Dev
            <span>/&gt;</span>
          </div>

          <p>
            Designed & Built by Deep Chand Kundu
          </p>

          <p className="copyright">
            © {new Date().getFullYear()} Deep Chand Kundu. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;