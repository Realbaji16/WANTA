import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/images/signup-bg.png';
import wlogo from '../assets/images/wantalogo.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && password.trim() && isAgreed) {
      navigate('/select-avatar', { state: { name } }); // Navigate with state
    } else {
      alert('Please fill out all fields and agree to the terms and conditions!');
    }
  };

  // Check if all fields are filled
  const isFormValid = name.trim() && email.trim() && password.trim() && isAgreed;

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[95%] sm:w-full max-w-md p-6 bg-white rounded-3xl shadow-md">
        <div className="flex justify-center mb-8">
          <img src={wlogo} alt="wantalogo" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-3xl bg-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-100 rounded-3xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-100 rounded-3xl mb-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="h-5 w-5 text-[#FF7700] border-gray-300 rounded focus:ring-[#FF7700]"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={!isFormValid} // Disable button if the form is invalid
            className={`w-full px-4 py-2 text-white rounded-3xl focus:ring focus:ring-blue-300 ${
              isFormValid ? 'bg-[#FF7700] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
