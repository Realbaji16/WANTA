import React from 'react';
import imageape from '../assets/images/imageape.png'
import imagebat from '../assets/images/imagebat.png'
import imageff from '../assets/images/imageff.png'
import image2k from '../assets/images/image2k.png'
import imagefc from '../assets/images/imagefc.png'
import imagefnite from '../assets/images/fnite.png'
import imagejedi from '../assets/images/jedi.png'
import imagesims from '../assets/images/sims.png'

const GameGrid = () => {
  const gameCovers = [
image2k,
imageape,
imagebat,
imageff,
imagefc,
imagesims,
imagejedi,
imagefnite
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
      {gameCovers.map((cover, index) => (
        <div
          key={index}
          className="aspect-w-2 aspect-h-3 bg-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={cover}
            alt={`Game Cover ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
