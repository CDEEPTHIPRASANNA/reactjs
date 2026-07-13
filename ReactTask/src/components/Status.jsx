function Status({ winner, draw, isXTurn, mode }) {
  let message = "";

  if (winner) {
    if (mode === "computer") {
      message =
        winner === "X"
          ? "You Win!"
          : "Computer Wins!";
    } else {
      message = `Player ${winner} Wins!`;
    }
  } else if (draw) {
    message = "It's a Draw!";
  } else {
    if (mode === "computer") {
      message = isXTurn
        ? "Your Turn (X)"
        : "Computer's Turn (O)";
    } else {
      message = `Current Turn: ${
        isXTurn ? "Player X" : "Player O"
      }`;
    }
  }

  return (
    <div className="status-container">
      <div className="game-mode">
        {mode === "computer"
          ? "Player vs Computer"
          : "Player vs Player"}
      </div>

      <div
        className={`status-message ${
          winner
            ? "winner"
            : draw
            ? "draw"
            : "playing"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Status;