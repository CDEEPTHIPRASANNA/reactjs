function ScoreBoard({ score, mode }) {
  return (
    <div className="score-board">
      <div className="score-card">
        <h3>{mode === "computer" ? "You (X)" : "Player X"}</h3>
        <span>{score.X}</span>
      </div>
      <div className="score-card draw-card">
        <h3>Draw</h3>
        <span>{score.Draw}</span>
      </div>
      <div className="score-card">
        <h3>{mode === "computer" ? "Computer (O)" : "Player O"}</h3>
        <span>{score.O}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
