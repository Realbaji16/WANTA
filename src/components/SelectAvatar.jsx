import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import wlogo from '../assets/images/wantalogo.png';
import ava1 from '../assets/images/ava1.png';
import ava2 from '../assets/images/ava2.png';
import ava3 from '../assets/images/ava3.png';
import ava4 from '../assets/images/ava4.png';

const SelectAvatar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state?.name || 'User';

  const avatars = [ava1, ava2, ava3, ava4];

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleContinueClick = () => {
    if (selectedAvatar) {
      navigate('/dashboard', { state: { name, avatar: selectedAvatar } });
    } else {
      alert('Please select an avatar before continuing.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FF7700] px-4 sm:px-6 lg:px-48">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-8 sm:p-10 lg:p-12 bg-white rounded-3xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <img src={wlogo} alt="wantalogo" className="w-32 h-auto sm:w-36 lg:w-40" />
        </div>

        {/* Greeting */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          Hey {name}!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
          Select your avatar:
        </p>

        {/* Avatars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full cursor-pointer hover:scale-105 transition-transform ${
                selectedAvatar === avatar ? 'ring-4 ring-[#FF7700]' : ''
              }`}
              onClick={() => handleAvatarClick(avatar)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinueClick}
          className="w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-24 text-white bg-[#FF7700] rounded-3xl focus:ring focus:ring-blue-300 text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectAvatar;
