import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import wlogo from '../assets/images/wantalogo.png';
import ShoppingGrid from './ShoppingGrid';


const Shopping = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'User';
  const avatar = location.state?.avatar;



  return (
    <div className="mt-8 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className=" text-white ">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <div className="text-lg font-bold">
            <a href="#"><img src={wlogo}/></a>
          </div>
  
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            {avatar && <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />}
            <span className="hidden md:block text-black text-lg font-medium">{name}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 px-4">
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <button className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
        onClick={() =>
    navigate('/dashboard', { state: { name, avatar } })
  }
      >
        Home
      </button>
      <button className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
        onClick={() =>
    navigate('/wanta-wall', { state: { name, avatar } })
  }
      >
        Wanta Wall
      </button>
      <button className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
         onClick={() =>
    navigate('/game-lobby', { state: { name, avatar } })
  }
      >
        Game lobby
      </button>
      <button className="bg-[#FF7700] text-white py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
         onClick={() =>
    navigate('/shopping', { state: { name, avatar } })
  }
      >
       Shopping
      </button>
   

    </div>
    <div className="text-center mt-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">Redeem your WANTA coins here! </h2>
        </div>
    <div className="py-16  rounded-3xl">
   
   <ShoppingGrid />
</div>

  </div>


     
   
    </div>
  );
};

export default Shopping;
