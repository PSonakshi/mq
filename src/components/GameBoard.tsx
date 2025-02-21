import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from '../store/gameStore';
import PuzzleModal from './PuzzleModal';
import { Flame, Heart, HelpCircle, Trophy } from 'lucide-react';

const GameBoard = () => {

  const { levels, currentLevel, playerPosition, lives, score, updateScore, playerId } = useGameStore();
  const [activePuzzle, setActivePuzzle] = useState<any>(null);
  const [showHelp, setShowHelp] = useState(false);
  const currentMaze = levels[currentLevel].maze;
  const theme = levels[currentLevel].theme;

  // Load stored score from localStorage

  // API Integration: Send Score Data
  const sendScoreToAPI = async (updatedScore: number) => {
    try {
      const response = await fetch('https://embe-swart.vercel.app/api/v1/score/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: `player_${playerId}`, // Dynamic player ID
          score: updatedScore
        })
      });
      const data = await response.json();
      console.log('Score update response:', data);
    } catch (error) {
      console.error('Error sending score:', error);
    }
  };

  // Calculate total possible score
  const totalScore = levels.reduce((acc, level) => acc + level.puzzles.length * 10, 0);

  // Check if player is on a puzzle
  const currentPuzzle = levels[currentLevel].puzzles.find(
    puzzle => puzzle.position.x === playerPosition.x && puzzle.position.y === playerPosition.y
  );

  // Show puzzle modal if player is on an unsolved puzzle
  useEffect(() => {
    if (currentPuzzle && !currentPuzzle.solved) {
      setActivePuzzle(currentPuzzle);
    }
  }, [playerPosition, currentPuzzle]);

  const handlePuzzleSolve = (isCorrect: boolean) => {
    if (isCorrect) {
      updateScore((score || 0) + 10); // Increase score by 10
    } else {
      updateScore((score || 0) - 10); // Decrease score by 10
    }
    setActivePuzzle(null);
  };

  const allLevelsCompleted = levels.every(level => level.completed);

  if (allLevelsCompleted) {
    sendScoreToAPI(score)
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-600 flex items-center justify-center">
        <div className="text-center">
          <Trophy className="w-24 h-24 text-white mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">Congratulations!</h1>
          <p className="text-xl text-white">You have completed all levels and reached Heaven!</p>
        </div>
      </div>
    );


  }

  return (
    <div className={`min-h-screen h-screen overflow-auto bg-gradient-to-b ${theme.background} p-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-4xl font-bold text-white">{levels[currentLevel].name}</h2>
            <p className="text-gray-300 mt-2">{levels[currentLevel].description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <HelpCircle size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: lives }).map((_, i) => (
                <Heart key={i} className="text-red-500" size={24} fill="currentColor" />
              ))}
            </div>
            <div className="text-white font-bold text-lg">
              Score: {score || 0} / {totalScore}
            </div>
          </div>
        </div>
        
        <div className="grid gap-1 bg-black bg-opacity-20 p-4 rounded-lg mb-8" style={{ 
          gridTemplateColumns: `repeat(${currentMaze[0].length}, minmax(0, 1fr))`
        }}>
          {currentMaze.map((row, y) => (
            row.map((cell, x) => {
              const isPlayer = playerPosition.x === x && playerPosition.y === y;
              const puzzle = levels[currentLevel].puzzles.find(
                p => p.position.x === x && p.position.y === y
              );
              const isPuzzle = !!puzzle;
              const isSolvedPuzzle = puzzle?.solved;

              return (
                <div
                  key={`${x}-${y}`}
                  className={`
                    aspect-square rounded-sm relative
                    ${cell === 1 ? 'bg-gray-800' : 'bg-gray-700 bg-opacity-50'}
                    ${isPuzzle && !isSolvedPuzzle ? 'ring-2 ring-yellow-500' : ''}
                    ${isSolvedPuzzle ? 'ring-2 ring-green-500' : ''}
                  `}
                >
                  {isPlayer && (
                    <motion.div
                      className="w-full h-full relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Flame
                        className={`w-full h-full text-${theme.accent}`}
                        fill="currentColor"
                      />
                    </motion.div>
                  )}
                </div>
              );
            })
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activePuzzle && (
          <PuzzleModal
            puzzle={activePuzzle}
            onSolve={handlePuzzleSolve}
            onClose={() => setActivePuzzle(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameBoard;
