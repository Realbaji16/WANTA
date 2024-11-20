import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import wlogo from '../assets/images/wantalogo.png';
import heropng from '../assets/images/Objects.svg';
import fantapng from '../assets/images/fanta.png';
import CountdownClock from './CountdownClock';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'User';
  const avatar = location.state?.avatar;

  return (
    <div className="mt-8 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <div className="text-lg font-bold">
            <a href="#">
              <img src={wlogo} alt="Wanta Logo" />
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            {avatar && <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />}
            <span className="hidden md:block text-black text-lg font-medium">{name}</span>
          </div>
        </div>
      </nav>

      {/* Buttons */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-[#FF7700]  text-white py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200">
            Home
          </button>
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() => navigate('/wanta-wall', { state: { name, avatar } })}
          >
            Wanta Wall
          </button>
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() => navigate('/game-lobby', { state: { name, avatar } })}
          >
            Game lobby
          </button>
          <button
            className="bg-transparent border border-black text-black py-2 px-4 rounded-3xl min-w-[120px] hover:bg-[#FF7700] hover:text-white hover:border-transparent transition duration-200"
            onClick={() => navigate('/shopping', { state: { name, avatar } })}
          >
            Shopping
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-[#FF7700] py-12 mb-8 mt-16 rounded-3xl relative overflow-visible">
          <div className="container mx-auto flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:w-[60%] px-6 mt-8 z-10">
              <div className="flex gap-2 justify-center lg:justify-start">
                <img src={fantapng} alt="Fanta Logo" className="w-16 lg:w-20" />
                <div>
                  <p className="text-white text-sm lg:text-base">Powered by Wanta Fanta</p>
                  <p className="text-white text-sm lg:text-base">The Coca-Cola Company</p>
                </div>
              </div>

              <h1 className="text-[32px] lg:text-[56px] font-bold text-white mb-4 mt-4 leading-tight">
                Stand a chance to win a Wanta Wishlist
              </h1>
              <p className="text-white text-sm lg:text-lg mb-6 leading-[19.3px]">
                Be ready! The Wanta Wall goes live soon. Mark the date and time to share
                your wish and stand a chance to make it come true!
              </p>

              {/* Countdown */}
              <CountdownClock />
            </div>

            {/* Right Image (Hidden on Mobile) */}
            <div className="lg:w-[40%] px-8 relative hidden lg:block">
              <img
                src={heropng}
                alt="Hero"
                className="absolute lg:top-[50px] lg:right-0 z-20 lg:max-w-[120%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
