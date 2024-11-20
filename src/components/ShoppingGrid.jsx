import React from 'react';
import imageps from '../assets/images/pstation.png';
import imageapple from '../assets/images/applegc.png';
import imageamazon from '../assets/images/amazongc.png';
import imagefc from '../assets/images/fcpoints.png';
import imagereebok from '../assets/images/reebok.png';
import imagenike from '../assets/images/nike.png';
import imagewish from '../assets/images/wish.png';
import imagepuma from '../assets/images/puma.png';

const ShoppingGrid = () => {
  const gameCovers = [
    { src: imageps, title: "PlayStation Gift Card", description: "$20 Value" },
    { src: imageapple, title: "Apple Gift Card", description: "$50 Value" },
    { src: imageamazon, title: "Amazon Gift Card", description: "$25 Value" },
    { src: imagepuma, title: "Puma Gift Card", description: "$10 Value" },
    { src: imagereebok, title: "Reebok Gift Card", description: "1000 Points" },
    { src: imagenike, title: "Nike Gift Card", description: "$100 Value" },
    { src: imagefc, title: "FIFA Points", description: "2000 Points" },
    { src: imagewish, title: "Wish Gift Card", description: "$50 Value" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
      {gameCovers.map((cover, index) => (
        <div
          key={index}
          className="relative group aspect-w-2 aspect-h-3 bg-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={cover.src}
            alt={cover.title}
            className="w-full h-full object-cover"
          />
          {/* Hover Details */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-semibold">{cover.title}</h3>
            <p className="text-gray-300 text-sm">{cover.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingGrid;
