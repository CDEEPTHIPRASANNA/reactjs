
const About = () => {
  const highlights = [
    { icon: "🚀", title: "Innovation", description: "We build modern web applications using the latest React technologies." },
    { icon: "💡", title: "Creative Solutions", description: "Every project is designed with creativity and user experience in mind." },
    { icon: "🤝", title: "Customer Focus", description: "Understanding client requirements is our highest priority." },
  ];

  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "60+", label: "Happy Clients" },
    { value: "8+", label: "Team Members" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const team = [
    { name: "John Anderson", role: "Senior React Developer", emoji: "👨‍💻" },
    { name: "Sai", role: "UI / UX Designer", emoji: "👩‍🎨" },
    { name: "David Smith", role: "Project Manager", emoji: "👨‍💼" },
    { name: "Baba", role: "Backend Developer", emoji: "👨‍🔧" },
  ];

  return (
    <main className="about-page" aria-labelledby="about-heading">
      <div className="about-wrapper">
        <div className="about-inner">
          <section className="about-hero" aria-labelledby="about-hero-heading">
            <div className="hero-content">
              <span className="about-badge">ABOUT OUR COMPANY</span>
              <h1 id="about-hero-heading">We Create Digital Experiences<br/>That People Love.</h1>
              <p>Our passionate team builds fast, responsive and visually attractive web applications that help businesses grow in today's digital world.</p>
              <div className="hero-actions">
                <button className="about-btn">Explore Our Work</button>
              </div>
            </div>
          </section>

          <section className="company-story">
            <div className="story-left">
              <h2>Our Story</h2>
              <p>Started with a vision of delivering quality software, our company has successfully developed modern web applications for startups, businesses and individual clients.</p>
              <p>We believe in clean code, beautiful UI, continuous learning and long-term client relationships.</p>
            </div>
            <aside className="story-right" aria-hidden="false">
              <div className="story-box"><h3>2019</h3><p>Started Journey</p></div>
              <div className="story-box"><h3>2022</h3><p>100+ Projects</p></div>
              <div className="story-box"><h3>Today</h3><p>Growing Globally</p></div>
            </aside>
          </section>

          <section className="highlights">
            <h2>Why Clients Choose Us</h2>
            <div className="highlight-grid">
              {highlights.map((item, i) => (
                <article className="highlight-card" key={i}>
                  <div className="highlight-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="statistics">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat-card stat-card--about" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              {team.map((m, i) => (
                <div className="team-card" key={i}>
                  <div className="team-avatar">{m.emoji}</div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-footer">
            <h2>Let's Build Something Great Together</h2>
            <p>We transform ideas into scalable and modern web applications.</p>
            <div className="hero-actions"><button className="about-btn">Contact Us</button></div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
