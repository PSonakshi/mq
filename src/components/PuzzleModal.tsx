import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import useGameStore from '../store/gameStore';

type PuzzleModalProps = {
  onClose: () => void;
  puzzle: {
    id: string;
    type: string;
    question: string;
  };
};

const PuzzleModal = ({ onClose, puzzle }: PuzzleModalProps) => {
  const [answer, setAnswer] = useState('');
  const { solvePuzzle, currentLevel, lives } = useGameStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = solvePuzzle(currentLevel, puzzle.id, answer);
    if (result) {
      onClose();
    }
    setAnswer('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-lg p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {puzzle.type.charAt(0).toUpperCase() + puzzle.type.slice(1)} Puzzle
          </h3>
          <p className="text-gray-300">Lives remaining: {lives}</p>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <p className="text-white">{puzzle.question}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg mb-4"
            placeholder="Enter your answer..."
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Submit Answer
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PuzzleModal;