# Tic-Tac-Toe

A modern React Tic-Tac-Toe game built with Vite. Players take turns placing X and O on a 3x3 board, and the game detects winners and draws automatically.

## Features

- 3x3 interactive game board
- Turn-based gameplay for X and O
- Win detection with highlighted winning line
- Draw detection
- Reset button to start a new round
- Responsive, polished UI

## Tech Stack

- React
- Vite
- JavaScript

## Project Structure

```bash
TicTacToe/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

## Gameplay

- Click any empty square to place your symbol.
- The game alternates turns between X and O.
- A winner is announced when a player completes a line.
- A draw is announced when all squares are filled without a winner.
- Use the New game button to reset the board.

## Notes

This project was created as a small React practice app and can be expanded with features like:

- score tracking
- a single-player AI mode
- player name inputs
- sound effects
- animations

## License

This project is for educational/demo purposes.