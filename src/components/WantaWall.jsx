import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import wlogo from '../assets/images/wantalogo.png';
import StickyWall from './StickyWall';

const WantaWall = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'User';
  const avatar = location.state?.avatar;

  const [newOption, setNewOption] = useState(''); // State for input text
  const [customOptions, setCustomOptions] = useState([]); // State for dynamically added options

  // Handle adding a new option
  const handleAddOption = () => {
    if (newOption.trim() === '') return;

    setCustomOptions((prev) => [
      ...prev,
      {
        id: Date.now(), // Unique ID for the option
        name: newOption,
        color: 'bg-gray-500', // Default color for new options
        position: {
          top: `${Math.random() * 80}%`, // Random vertical position
          left: `${Math.random() * 80}%`, // Random horizontal position
        },
      },
    ]);

    setNewOption(''); // Clear input field after adding
  };

  // Handle removing an option
  const handleRemoveOption = (id) => {
    setCustomOptions((prev) => prev.filter((option) => option.id !== id));
  };

  return (
    <div className="mt-8 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <div className="text-lg font-bold">
            <a href="#"><img src={wlogo} alt="Logo" /></a>
          </div>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            {avatar && <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />}
            <span className="hidden md:block text-black text-lg font-medium">{name}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8 px-4">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() =>
    navigate('/dashboard', { state: { name, avatar } })
  }
          >
            Home
          </button>
          <button className="bg-[#FF7700]  text-white py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() =>
    navigate('/wanta-wall', { state: { name, avatar } })
  }
          >
            Wanta Wall
          </button>
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() =>
    navigate('/game-lobby', { state: { name, avatar } })
  }
          >
            Game Lobby
          </button>
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() =>
    navigate('/shopping', { state: { name, avatar } })
  }
          >
            Shopping
          </button>
        </div>

        {/* Sticky Wall Section */}
        <div className="py-12 mt-12 rounded-3xl">
          <StickyWall customOptions={customOptions} onRemoveOption={handleRemoveOption} />
        </div>

        {/* Input Section */}
        <div className="mt-6 flex flex-col items-center">
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Add your wish"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <button
            onClick={handleAddOption}
            className="mt-4 px-6 py-2 mb-16 bg-[#FF7700] text-white rounded-3xl hover:bg-orange-600 transition"
          >
            Add to Sticky Wall
          </button>
        </div>
      </div>
    </div>
  );
};

export default WantaWall;
