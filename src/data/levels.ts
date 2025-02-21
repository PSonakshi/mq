import { Level } from '../types/game';

export const levels: Level[] = [
  {
    id: 0,
    name: "The Inferno's Gate",
    description: "Begin your ascent through the scorching gates of Hell. Solve these simple puzzles to progress.",
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    puzzles: [
      {
        id: "l1p1",
        type: "ascii",
        position: { x: 1, y: 3 },
        solved: false,
        question: "Convert A to its ASCII value",
        answer: "65"
      },
      {
        id: "l1p2",
        type: "binary",
        position: { x: 5, y: 5 },
        solved: false,
        question: "What is the sum of 2 + 3 in binary?",
        answer: "101"
      },
      {
        id: "l1p3",
        type: "cipher",
        position: { x: 8, y: 7 },
        solved: false,
        question: "Encrypt 'HELLO' using a Caesar cipher with shift +2",
        answer: "jgnnq"
      }
    ],
    completed: false,
    theme: {
      background: "from-red-900 to-orange-700",
      accent: "red-500"
    }
  },
  {
    id: 1,
    name: "Purgatory's Path",
    description: "Navigate through the misty realms of purgatory with these simple riddles.",
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    puzzles: [
      {
        id: "l2p1",
        type: "binary",
        position: { x: 4, y: 3 },
        solved: false,
        question: "Convert 101010 to decimal",
        answer: "42"
      },
      {
        id: "l2p2",
        type: "coding",
        position: { x: 7, y: 5 },
        solved: false,
        question: "for i in range(1, 11):   if i % 7 == 0:   print(i)",
        answer: "7"
      },
      {
        id: "l2p3",
        type: "cipher",
        position: { x: 6, y: 8 },
        solved: false,
        question: "printf('%d', (int)pow(2, 3));",
        answer: "8"
      }
    ],
    completed: false,
    theme: {
      background: "from-purple-900 to-gray-700",
      accent: "purple-500"
    }
  },
  {
    id: 2,
    name: "Celestial Sanctuary",
    description: "The final steps to heaven await. These divine puzzles will guide your way.",
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    puzzles: [
      {
        id: "l3p1",
        type: "coding",
        position: { x: 4, y: 3 },
        solved: false,
        question: "What will be the output of: printf(\"%d\", 10 / 3);",
        answer: "3"
      },
      {
        id: "l3p2",
        type: "binary",
        position: { x: 5, y: 5 },
        solved: false,
        question: "Convert binary 1010 to decimal.",
        answer: "10"
      },
      {
        id: "l3p3",
        type: "binary",
        position: { x: 4, y: 7 },
        solved: false,
        question: "TRUE AND FALSE",
        answer: "FALSE"
      }
    ],
    completed: false,
    theme: {
      background: "from-blue-900 to-blue-500",
      accent: "yellow-500"
    }
},
{
    id: 3,
    name: "The Shadow Labyrinth",
    description: "Navigate through the dark and eerie depths of the shadow realm. Only the wise will find their way out.",
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    puzzles: [
      {
        id: "14p1",
        type: "qr",
        position: { x: 3, y: 3 },
        solved: false,
        question: "Father of Computer",
        answer: "Charles Babbage"
      },
      {
        id: "l4p2",
        type: "binary",
        position: { x: 6, y: 5 },
        solved: false,
        question: "101+101 (hint: there are 10 type of people in world 1 who know binary and 0 those who dont)",
        answer: "1010"
      },
      {
        id: "l4p3",
        type: "cipher",
        position: { x: 7, y: 8 },
        solved: false,
        question: "Decode 'Dwwdfn dw gdzq!'' (Hint: Shift -3)",
        answer: "Attack at dawn!"
      }
    ],
    completed: false,
    theme: {
      background: "from-green-600 to-black",
      accent: "green-500"
    }
},
{
  id: 4,
  name: "Frozen Abyss",
  description: "Brave the icy winds and solve the puzzles hidden in the frozen abyss to escape.",
  maze: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  puzzles: [
    {
      id: "l5p1",
      type: "qr",
      position: { x: 1, y: 3 },
      solved: false,
      question: "print('hello' * 3)",
      answer: "hellohellohello"
    },
    {
      id: "l5p2",
      type: "qr",
      position: { x: 4, y: 5 },
      solved: false,
      question: "What club is conducting MazeQuest?",
      answer: "enigma"
    },
    {
      id: "l5p3",
      type: "cipher",
      position: { x: 8, y: 6 },
      solved: false,
      question: "Decode 'Wklv lv d whvw phvvdjh' (Caesar cipher with shift -3)",
      answer: "this is a test message"
    }
  ],
  completed: false,
  theme: {
    background: "from-blue-900 to-blue-400",
    accent: "cyan-500"
  }
},
{
  id: 5,
  name: "Shadowed Catacombs",
  description: "Venture through the dark, eerie tunnels of the catacombs, solving puzzles to find your way out.",
  maze: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  puzzles: [
    {
      id: "l6p1",
      type: "binary",
      position: { x: 3, y: 3 },
      solved: false,
      question: "1010+1111",
      answer: "11001"
    },
    {
      id: "l6p2",
      type: "coding",
      position: { x: 6, y: 4 },
      solved: false,
      question: "Convert 'Z' to its ASCII value",
      answer: "90"
    },
    {
      id: "l6p3",
      type: "cipher",
      position: { x: 7, y: 8 },
      solved: false,
      question: "print('Hello'[::-1])",
      answer: "olleh"
    }
  ],
  completed: false,
  theme: {
    background: "from-gray-900 to-black",
    accent: "gray-500"
  }
},
{
  id: 6,
  name: "Frozen Abyss",
  description: "A chilling journey through an icy labyrinth. Solve these puzzles to escape the frozen abyss.",
  maze: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  puzzles: [
    {
      id: "l7p1",
      type: "coding",
      position: { x: 2, y: 3 },
      solved: false,
      question: "What is the result of binary AND operation: 1 AND 0",
      answer: "0"
    },
    {
      id: "l7p2",
      type: "coding",
      position: { x: 4, y: 5 },
      solved: false,
      question: "print('hello world')",
      answer: "hello world"
    },
    {
      id: "l7p3",
      type: "cipher",
      position: { x: 8, y: 7 },
      solved: false,
      question: "ASCII of C",
      answer: "67"
    }
  ],
  completed: false,
  theme: {
    background: "from- cyan-900 to-cyan-500",
    accent: "blue-300"
  }
}


];
