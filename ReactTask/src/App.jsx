import { useState } from "react";
import "./App.css";
import GameMode from "./components/GameMode";
import Board from "./components/Board";
import Status from "./components/Status";
import ScoreBoard from "./components/ScoreBoard";
import { checkWinner, getComputerMove } from "./utils/gameLogic";

function App() {
  const [mode, setMode] = useState("");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);

  const [score, setScore] = useState({ X: 0, O: 0, Draw: 0 });

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setDraw(false);
    setIsXTurn(true);
  };

  const newGame = () => {
    resetBoard();
    setMode("");
    setScore({ X: 0, O: 0, Draw: 0 });
  };

  const updateGame = (newBoard) => {
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setScore((prev) => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }));
      return true;
    }

    if (!newBoard.includes("")) {
      setDraw(true);
      setScore((prev) => ({ ...prev, Draw: prev.Draw + 1 }));
      return true;
    }

    return false;
  };

  const handleClick = (index) => {
    if (board[index] || winner || draw) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);

    if (updateGame(newBoard)) return;

    if (mode === "computer") {
      const computerMove = getComputerMove(newBoard);
      if (computerMove !== -1) {
        newBoard[computerMove] = "O";
        setTimeout(() => {
          setBoard([...newBoard]);
          updateGame(newBoard);
        }, 400);
      }
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  if (!mode) {
    return <GameMode setMode={setMode} />;
  }

  return (
    <div className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Webpage model • interactive UI</p>
          <h1>Tic-Tac-Toe with a polished front-end experience.</h1>
          <p className="hero-intro">
            The same gameplay rules remain intact, while the layout now feels like a modern webpage card with responsive spacing and motion.
          </p>
          <div className="hero-actions">
            <span className="pill">Responsive layout</span>
            <span className="pill">Logic unchanged</span>
          </div>
        </div>

        <div className="game-card">
          <div className="game-header">
            <div>
              <p className="eyebrow">Live game</p>
              <h2>{mode === "computer" ? "Player vs Computer" : "Player vs Player"}</h2>
            </div>
            <div className={`turn-pill ${isXTurn ? "x" : "o"}`}>{isXTurn ? "X" : "O"}</div>
          </div>

          <ScoreBoard score={score} mode={mode} />
          <Status winner={winner} draw={draw} isXTurn={isXTurn} mode={mode} />
          <Board board={board} handleClick={handleClick} />

          <div className="button-group">
            <button className="secondary-btn" onClick={resetBoard}>Restart</button>
            <button className="primary-btn" onClick={newGame}>New Game</button>
          </div>
        </div>
      </section>

      <section className="info-grid" aria-label="Game overview">
        <article className="info-card">
          <h3>How it works</h3>
          <p>Players alternate turns and the board updates instantly when a winner or draw is detected.</p>
        </article>
        <article className="info-card">
          <h3>Visual focus</h3>
          <p>The interface is redesigned as a webpage-style layout with rounded cards and clear hierarchy.</p>
        </article>
        <article className="info-card">
          <h3>Safe upgrade</h3>
          <p>All existing game actions and rules remain intact so the experience stays functional.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
