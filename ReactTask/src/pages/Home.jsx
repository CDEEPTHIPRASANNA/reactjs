import React from "react";

const Home = () => {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      desc: "Modern React applications with reusable components.",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      desc: "Optimized websites with smooth user experience.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Perfectly adapts to mobile, tablet and desktop.",
    },
  ];

  const skills = [
    "React JS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "React Router",
    "Git",
    "REST API",
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="badge">🚀 Welcome To My Portfolio</span>
          <h1>
            Crafting Modern
            <br />
            React Applications
          </h1>
          <p>
            I build responsive, attractive and scalable web applications
            using React.js with modern UI principles and reusable
            components.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Projects</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <div className="avatar">DP</div>
            <h2>Deepthi Prasanna</h2>
            <p>Frontend Developer</p>
            <div className="experience">
              <div>
                <h3>12+</h3>
                <span>Projects</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Responsive</span>
              </div>
              <div>
                <h3>React</h3>
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>What I Do</h2>
        <div className="service-container">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Technology Stack</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="journey">
        <h2>Development Workflow</h2>
        <div className="timeline">
          <div className="step">
            <span>1</span>
            <p>Planning</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Design</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Development</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Testing</p>
          </div>
          <div className="step">
            <span>5</span>
            <p>Deployment</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-banner">
        <h2>Let's Build Something Amazing Together</h2>
        <p>
          Creating responsive, beautiful and user-friendly web applications.
        </p>
        <button className="btn-primary">Hire Me</button>
      </section>
    </div>
  );
};

export default Home;
