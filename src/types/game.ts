export type Position = {
  x: number;
  y: number;
};

export type Puzzle = {
  id: string;
  type: 'cipher' | 'ascii' | 'qr' | 'binary' | 'coding';
  position: Position;
  solved: boolean;
  question: string;
  answer: string;
};

export type Level = {
  id: number;
  name: string;
  description: string;
  maze: number[][];
  puzzles: Puzzle[];
  completed: boolean;
  theme: {
    background: string;
    accent: string;
  };
};

export type GameState = {
  currentLevel: number;
  lives: number;
  score: number; // ✅ Added score property
  levels: Level[];
  playerPosition: Position;
  gameStarted: boolean;
  setGameStarted: (started: boolean) => void;
  movePlayer: (direction: 'up' | 'down' | 'left' | 'right') => void;
  solvePuzzle: (levelId: number, puzzleId: string, answer: string) => boolean;
  updateScore: (points: number) => void; // ✅ Added score update function
};
