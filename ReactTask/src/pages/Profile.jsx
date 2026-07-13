
const Profile = () => {
  const skills = ["React", "JavaScript", "CSS3", "HTML5", "Vite", "Git", "REST API", "UI/UX"];

  return (
    <main className="profile-page" aria-labelledby="profile-heading">
      <div className="profile-panel">
        <section className="profile-hero">
          <div className="profile-hero-left">
            <div className="profile-avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
                alt="C Deepthi Prasanna"
              />
            </div>
          </div>

          <div className="profile-hero-right">
            <h1 id="profile-heading">C Deepthi Prasanna</h1>
            <div className="profile-role">Frontend Developer</div>
            <p className="profile-summary">
              Passionate about building accessible, responsive, and visually attractive web applications with React.js and modern frontend tooling.
            </p>

            <div className="profile-actions">
              <button className="btn-primary">Follow</button>
              <button className="btn-secondary">Message</button>
            </div>

            <div className="profile-meta">
              <span>Employee ID: <strong>STK-26-2778</strong></span>
              <span>Email: <strong>deepthiprasannac@thestackly.com</strong></span>
            </div>
          </div>
        </section>

        <section className="profile-stats">
          <article className="profile-stat">
            <strong>5</strong>
            <span>Projects</span>
          </article>
          <article className="profile-stat">
            <strong>Fresher</strong>
            <span>Years Learning</span>
          </article>
          <article className="profile-stat">
            <strong>120</strong>
            <span>Connections</span>
          </article>
          <article className="profile-stat">
            <strong>4.9★</strong>
            <span>Rating</span>
          </article>
        </section>

        <section className="profile-grid">
          <div className="info-card">
            <h3>Personal Information</h3>
            <ul className="profile-info-list">
              <li><strong>Name:</strong> C Deepthi Prasanna</li>
              <li><strong>Email:</strong> deepthiprasannac@thestackly.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Location:</strong> Bangalore</li>
              <li><strong>Role:</strong> Frontend Developer</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Skills</h3>
            <div className="skills-wrap">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <h3>About Me</h3>
            <p>
              I enjoy creating polished user experiences and responsive React interfaces.
              I care about accessibility, clean code, and delivering solutions that look modern and work smoothly.
            </p>
          </div>

          <div className="info-card">
            <h3>Achievements</h3>
            <ul>
              <li>Completed 20+ React projects</li>
              <li>Built responsive portfolio and business apps</li>
              <li>Strong knowledge of React Router DOM</li>
              <li>Design systems and polished UI interactions</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
