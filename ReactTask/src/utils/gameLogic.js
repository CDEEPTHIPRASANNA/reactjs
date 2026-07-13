const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board) => {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export const getComputerMove = (board) => {
  const emptyCells = board
    .map((cell, index) => (cell === "" ? index : -1))
    .filter((index) => index !== -1);

  for (const index of emptyCells) {
    const trialBoard = [...board];
    trialBoard[index] = "O";

    if (checkWinner(trialBoard) === "O") {
      return index;
    }
  }

  for (const index of emptyCells) {
    const trialBoard = [...board];
    trialBoard[index] = "X";

    if (checkWinner(trialBoard) === "X") {
      return index;
    }
  }

  if (emptyCells.includes(4)) {
    return 4;
  }

  return emptyCells[0] ?? -1;
};
