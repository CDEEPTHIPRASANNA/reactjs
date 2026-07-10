
const Services = () => {
  const services = [
    {
      icon: "⚛️",
      title: "React SPA Development",
      description: "Fast, accessible single-page applications using modern React patterns and performance optimizations.",
    },
    {
      icon: "🧩",
      title: "Component Design System",
      description: "Reusable UI components, theming, and documentation to keep your product consistent and fast to iterate.",
    },
    {
      icon: "☁️",
      title: "API & Backend Integration",
      description: "Secure, reliable integrations with REST/GraphQL backends, serverless functions, and authentication.",
    },
    {
      icon: "📱",
      title: "Responsive Web Apps",
      description: "Pixel-perfect responsive layouts and touch-friendly interactions for mobile-first experiences.",
    },
    {
      icon: "⚙️",
      title: "Performance Optimization",
      description: "Bundle splitting, caching strategies, and runtime profiling to keep apps fast at scale.",
    },
    {
      icon: "🔒",
      title: "Security & Accessibility",
      description: "OWASP basics, secure headers, and WCAG-compliant interfaces for accessibility and trust.",
    },
  ];

  return (
    <main className="services-page" aria-labelledby="services-heading">
      <div className="services-wrapper">
        <div className="services-inner">
          <section className="services-hero" aria-hidden>
            <h1 id="services-heading">Services We Offer</h1>
            <p>We design and build production-grade web applications focused on performance, accessibility, and delightful UX.</p>
          </section>

          <section className="services-grid-section">
            <div className="service-grid">
              {services.map((s, i) => (
                <article className="service-card" key={i}>
                  <div className="service-icon" aria-hidden>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div style={{marginTop:12}}>
                    <button className="service-btn">Learn More</button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="services-cta">
            <p style={{marginBottom:12}}>Need a custom solution? We help from discovery to delivery.</p>
            <button className="service-primary-btn">Start A Project</button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Services;
