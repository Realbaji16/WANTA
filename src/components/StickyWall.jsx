import React, { useState, useEffect }  from 'react';
import { FaTrophy, FaBicycle, FaPlaystation, FaLaptop, FaTv, FaApple, FaHeadphones, FaShoePrints } from 'react-icons/fa';

const StickyWall = ({ customOptions, onRemoveOption }) => {

    const [visibleOptions, setVisibleOptions] = useState([]);

    useEffect(() => {
      // Animation logic: delay the appearance of each option
      setVisibleOptions([...predefinedOptions, ...customOptions]);
    }, [customOptions]);
  

  const predefinedOptions = [
    { name: 'Stanley Cup', color: 'bg-red-500', icon: <FaTrophy />, position: { top: '10%', left: '20%' } },
    { name: 'E Bicycle', color: 'bg-blue-500', icon: <FaBicycle />, position: { top: '30%', left: '50%' } },
    { name: 'Playstation 5', color: 'bg-green-500', icon: <FaPlaystation />, position: { top: '50%', left: '10%' } },
    { name: 'Macbook', color: 'bg-yellow-500', icon: <FaLaptop />, position: { top: '70%', left: '40%' } },
    { name: 'Netflix sub', color: 'bg-purple-500', icon: <FaTv />, position: { top: '20%', left: '70%' } },
    { name: 'Apple Watch', color: 'bg-pink-500', icon: <FaApple />, position: { top: '40%', left: '30%' } },
    { name: 'Airpod max', color: 'bg-teal-500', icon: <FaHeadphones />, position: { top: '60%', left: '80%' } },
    { name: 'Sneakers', color: 'bg-orange-500', icon: <FaShoePrints />, position: { top: '80%', left: '60%' } },
  ];

  const allOptions = [...predefinedOptions, ...customOptions];

  return (
    <div className="relative h-96 overflow-hidden mx-auto rounded-lg bg-gray-100">
      {visibleOptions.map((option, index) => (
        <div
          key={option.id || index}
          className={`absolute flex items-center gap-2 cursor-pointer p-2 rounded-full shadow-md transition-colors animate-fall ${option.color}`}
          style={{
            top: option.position.top,
            left: option.position.left,
            animationDelay: `${index * 0.1}s`, // Stagger animation
          }}
        >
          {/* Button */}
          <div className="flex items-center px-4 py-2 bg-opacity-90 text-white rounded-full ">
            {/* Icon */}
            <span className="text-lg sm:text-base md:text-lg lg:text-xl">{option.icon}</span>

            {/* Text */}
            <span className="ml-2 text-xs sm:text-sm md:text-base font-medium flex-grow">{option.name}</span>

            {/* Remove Button */}
            {option.id && (
              <button
                onClick={() => onRemoveOption(option.id)}
                className="ml-2 text-xs sm:text-sm text-white bg-red-500 px-2 py-1 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyWall;
