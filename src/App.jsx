import { useState } from 'react';
import './App.css';

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  return { winner: null, line: [] };
}

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo.winner;
  const draw = !winner && squares.every(Boolean);

  const status = winner
    ? `Winner: ${winner}`
    : draw
      ? "It's a draw!"
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(index) {
    if (squares[index] || winner || draw) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext((current) => !current);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <main className="app-shell">
      <div className="game-card">
        <div className="header">
          <p className="eyebrow">Classic challenge</p>
          <h1>Tic-Tac-Toe</h1>
        </div>

        <div className={`status-badge ${winner ? 'winner' : draw ? 'draw' : ''}`}>
          {status}
        </div>

        <div className="board" role="grid" aria-label="Tic-tac-toe board">
          {squares.map((square, index) => {
            const isWinningSquare = winnerInfo.line.includes(index);

            return (
              <button
                key={index}
                type="button"
                className={`square ${square ? 'filled' : ''} ${isWinningSquare ? 'winning' : ''}`}
                onClick={() => handleClick(index)}
                aria-label={`Cell ${index + 1}${square ? `, ${square}` : ''}`}
              >
                {square}
              </button>
            );
          })}
        </div>

        <button type="button" className="reset-button" onClick={resetGame}>
          New game
        </button>
      </div>
    </main>
  );
}