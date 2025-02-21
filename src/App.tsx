import React, { useEffect } from 'react';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';
import useGameStore from './store/gameStore';

function App() {
  const gameStarted = useGameStore((state) => state.gameStarted);
  const movePlayer = useGameStore((state) => state.movePlayer);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return;

      switch (e.key.toLowerCase()) {
        case 'w':
          movePlayer('up');
          break;
        case 's':
          movePlayer('down');
          break;
        case 'a':
          movePlayer('left');
          break;
        case 'd':
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, movePlayer]);

  return (
    <div className="w-full h-screen">
      {!gameStarted ? <LandingPage /> : <GameBoard />}
    </div>
  );
}

export default App;