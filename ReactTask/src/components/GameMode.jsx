function GameMode({ setMode }) {
  return (
    <div className="page-shell">
      <section className="mode-shell">
        <div className="mode-copy">
          <p className="eyebrow">Start here</p>
          <h1>Choose your mode and begin.</h1>
          <p className="hero-intro">This screen now feels like a polished landing page, while the game itself still uses the same rules and interactions underneath.</p>
          <div className="hero-actions">
            <span className="pill">Classic rules</span>
            <span className="pill">Responsive design</span>
          </div>
        </div>

        <div className="mode-card">
          <h2>Select a match</h2>
          <button className="mode-btn" onClick={() => setMode("player")}> Player vs Player</button>
          <button className="mode-btn" onClick={() => setMode("computer")}> Player vs Computer</button>
        </div>
      </section>
    </div>
  );
}

export default GameMode;
