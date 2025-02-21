import React, { useState } from 'react';
import { Flame, CloudSun } from 'lucide-react';
import useGameStore from '../store/gameStore';

const LandingPage = () => {
  const setGameStarted = useGameStore((state) => state.setGameStarted);
  const [userDetails, setUserDetails] = useState({ name: '', regNo: '', branch: '' });
  const [loading, setLoading] = useState(false); // Track API call status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.regNo || !userDetails.branch) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('https://embe-swart.vercel.app/api/v1/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userDetails.name.trim(), 
          branch: userDetails.branch.trim(),
          registrationnumber: userDetails.regNo.trim(), // Ensure field matches schema
          score: 0,
        }),
      });

      const data = await response.json();
      console.log('User creation response:', data);

      if (response.ok) {
        setGameStarted(true);
      } else {
        alert(data.message || 'Failed to create user. Try again.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          {Array.from({ length: 20 }).map((_, i) => (
            <Flame
              key={`flame-${i}`}
              className="absolute text-orange-500 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 1})`,
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2">
          {Array.from({ length: 20 }).map((_, i) => (
            <CloudSun
              key={`cloud-${i}`}
              className="absolute text-blue-300 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 1})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <h1 className="text-7xl font-bold text-white mb-8 relative">
        <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          MazeQuest
        </span>
      </h1>

      <p className="text-gray-300 text-xl mb-12 max-w-2xl text-center px-4">
        Journey from the depths of Hell to the heights of Heaven in this
        challenging puzzle adventure. Can you solve the mysteries that await?
      </p>

      {/* User Details Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-transparent p-6 rounded-lg shadow-lg max-w-md w-full backdrop-blur-md border border-gray-500"
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400 placeholder-gray-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Registration Number</label>
          <input
            type="text"
            name="regNo"
            value={userDetails.regNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400 placeholder-gray-300"
            placeholder="Enter your registration number"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">Branch</label>
          <input
            type="text"
            name="branch"
            value={userDetails.branch}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400 placeholder-gray-300"
            placeholder="Enter your branch"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? 'Starting...' : 'Start the Quest'}
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
