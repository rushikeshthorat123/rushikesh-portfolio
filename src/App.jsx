import "./App.css";

const skills = [
  "C", "C++", "Java", "Python", "Node.js", "HTML", "CSS", "PHP",
  "React.js", "MySQL", "MongoDB", "AWS Cloud", "Linux", "Problem Solving"
];

const projects = [
  {
    title: "CareerMate AI",
    description:
      "AI-powered career guidance, skill gap analysis and placement assistance platform. It provides personalized career recommendations, learning roadmaps, resume analysis, placement preparation, mock interviews, and job/internship recommendations.",
    image: "/projects/careermate-02.png"
  },
  {
    title: "Mental Health Disorder Detection in Social Media",
    description:
      "A project that analyzes social media posts using NLP and sentiment analysis to identify emotional patterns and indicators related to stress, anxiety and depression.",
    image: "/projects/mental-health-01.png"
  }
];

const projectScreens = Array.from({ length: 10 }, (_, i) => `/projects/careermate-${String(i + 1).padStart(2, "0")}.png`);
const mentalHealthScreens = Array.from(
  { length: 9 },
  (_, i) => `/projects/mental-health-${String(i + 1).padStart(2, "0")}.png`
);
function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">RT<span>.</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Rushikesh<br /><span>Dilip Thorat</span></h1>
            <h2>AI &amp; Data Science Student</h2>
            <p className="lead">
              I build practical software and AI solutions with a focus on
              Data Science, Artificial Intelligence, web development and cloud technologies.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="#contact">Contact Me</a>
            </div>
            <div className="socials">
              <a href="https://github.com/rushikeshthorat123" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rushikesh-thorat-aba8002b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="initials">RT</div>
            <p>AI • Data • Web • Cloud</p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Building skills for real-world technology</h2>
          </div>
          <div className="about-grid">
            <p>
              I am a Bachelor of Technology student in Artificial Intelligence and Data Science at Sanjivani University, with a CGPA of 7.59. I enjoy solving problems and creating projects that combine software development, AI and data.
            </p>
            <div className="info-card">
              <strong>Current Focus</strong>
              <span>AI, Data Science, Machine Learning &amp; Full Stack Development</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section soft">
          <div className="section-heading">
            <p className="eyebrow">TECHNICAL SKILLS</p>
            <h2>Tools &amp; technologies I work with</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>AWS Cloud Implant Training</h2>
          </div>
          <div className="timeline-card">
            <div>
              <h3>Innovations Hub Services Pvt. Ltd.</h3>
              <p className="muted">Jun 2024 – Jul 2024</p>
            </div>
            <ul>
              <li>Hands-on training in AWS Cloud services including EC2, IAM, ELB, Auto Scaling and RDS.</li>
              <li>Practical exposure to cloud deployment and basic DevOps concepts.</li>
              <li>Worked on project documentation.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section soft">
          <div className="section-heading">
            <p className="eyebrow">PROJECTS</p>
            <h2>Things I've built</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={`${project.title} screenshot`} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-tag">Project</span>
                </div>
              </article>
            ))}
          </div>

          <button
  className="screenshot-btn"
  onClick={() => {
    document
      .getElementById("careermate-screenshots")
      .classList.toggle("show");
  }}
>
  View CareerMate AI Screenshots
</button>

<div id="careermate-screenshots" className="gallery hidden-gallery">
  {projectScreens.map((src, index) => (
    <a href={src} target="_blank" rel="noreferrer" key={src}>
      <img src={src} alt={`CareerMate AI screen ${index + 1}`} />
    </a>
  ))}
</div>
        </section>
        <button
  className="screenshot-btn"
  onClick={() => {
    document
      .getElementById("mental-health-screenshots")
      .classList.toggle("show");
  }}
>
  View Mental Health Screenshots
</button>

<div
  id="mental-health-screenshots"
  className="gallery hidden-gallery"
>
  {mentalHealthScreens.map((src, index) => (
    <a href={src} target="_blank" rel="noreferrer" key={src}>
      <img
        src={src}
        alt={`Mental Health project screen ${index + 1}`}
      />
    </a>
  ))}
</div>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">EDUCATION &amp; CERTIFICATIONS</p>
            <h2>Academic background</h2>
          </div>
          <div className="education-list">
            <div className="edu-card"><span>2024 – Present</span><h3>Bachelor of Technology in AIDS</h3><p>Sanjivani University · CGPA: 7.59</p></div>
            <div className="edu-card"><span>2024 – 2025</span><h3>Diploma in Cloud Computing and Big Data</h3><p>MSBTE · 82.18%</p></div>
            <div className="edu-card"><span>2021 – 2022</span><h3>SSC</h3><p>Maharashtra State Board · 85.80%</p></div>
          </div>
          <div className="cert-list">
            <span>AWS Cloud Implant Training</span>
            <span>Introduction to Generative AI Studio — Google Cloud / Simplilearn SkillUp</span>
            <span>Smart India Hackathon 2025 — Idea Presentation</span>
            <span>Python Full Stack Development — ExcelR</span>
            <span>International Conference Paper Presentation — SISEM-2026</span>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let's connect</h2>
            <p>Interested in internships, projects and technology opportunities.</p>
            <a className="email" href="mailto:rushikeshthorat8726@gmail.com">rushikeshthorat8726@gmail.com</a>
            <div className="contact-links">
              <a href="https://github.com/rushikeshthorat123" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/rushikesh-thorat-aba8002b9/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="tel:+918830590714">+91 88305 90714</a>
            </div>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Rushikesh Dilip Thorat. All rights reserved.</footer>
    </div>
  );
}

export default App;
