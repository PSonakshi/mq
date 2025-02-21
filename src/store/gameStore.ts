import { create } from 'zustand';
import { GameState, Position } from '../types/game';
import { levels } from '../data/levels';

const useGameStore = create<GameState>((set, get) => ({
  currentLevel: 0,
  lives: 7,
  score: 0,  // Added score state
  levels: levels,
  playerPosition: { x: 1, y: 1 },
  gameStarted: false,

  setGameStarted: (started) => set({ gameStarted: started }),

  // 🏆 Function to update score
  updateScore: (points: number) => {
    const newScore = Math.max(0, get().score + points); // Ensure score never goes below 0
    localStorage.setItem('playerScore', newScore.toString()); // Store in localStorage
    set({ score: newScore });
  },

  // 🔄 Load score from localStorage
  loadScore: () => {
    const storedScore = localStorage.getItem('playerScore');
    if (storedScore) {
      set({ score: parseInt(storedScore, 10) || 0 });
    }
  },

  // 🎮 Move player
  movePlayer: (direction) => {
    const { playerPosition, levels, currentLevel } = get();
    const maze = levels[currentLevel].maze;
    let newPosition: Position = { ...playerPosition };

    switch (direction) {
      case 'up': newPosition.y -= 1; break;
      case 'down': newPosition.y += 1; break;
      case 'left': newPosition.x -= 1; break;
      case 'right': newPosition.x += 1; break;
    }

    if (
      newPosition.y >= 0 &&
      newPosition.y < maze.length &&
      newPosition.x >= 0 &&
      newPosition.x < maze[0].length &&
      maze[newPosition.y][newPosition.x] !== 1
    ) {
      set({ playerPosition: newPosition });
    }
  },

  // 🧩 Solve puzzle logic
  solvePuzzle: (levelId, puzzleId, answer) => {
    const state = get();
    const { levels, lives } = state;
    const level = levels[levelId];
    const puzzle = level.puzzles.find((p) => p.id === puzzleId);

    if (!puzzle) return false;

    if (puzzle.answer.toLowerCase() === answer.toLowerCase()) {
      puzzle.solved = true;
      get().updateScore(10); // ✅ Increase score by 10 for correct answer

      // Check if all puzzles in the current level are solved
      const allPuzzlesSolved = level.puzzles.every(p => p.solved);
      if (allPuzzlesSolved) {
        level.completed = true;

        // If there's a next level, advance to it
        if (levelId < levels.length - 1) {
          setTimeout(() => {
            set({
              currentLevel: levelId + 1,
              playerPosition: { x: 1, y: 1 }
            });
          }, 1000);
        }
      }

      set({ levels: [...levels] });
      return true;
    } else {
      set({ lives: Math.max(0, lives - 1) }); // ✅ Reduce lives but never go below 0
      get().updateScore(-10); // ❌ Deduct 10 points for wrong answer
      return false;
    }
  },
}));

export default useGameStore;
