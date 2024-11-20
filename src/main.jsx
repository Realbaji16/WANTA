import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import SelectAvatar from './components/SelectAvatar';
import GameLobby from './components/GameLobby';
import Shopping from './components/Shopping';
import WantaWall from './components/WantaWall';

createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/select-avatar" element={<SelectAvatar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game-lobby" element={<GameLobby />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/wanta-wall" element={<WantaWall />} />
      </Routes>
    </Router>

)
