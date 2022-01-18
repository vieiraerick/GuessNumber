import React from 'react';
import { Routes, Route } from 'react-router';

import Configuracoes from 'pages/configuracoes';
import Home from 'pages/home';
import Play from 'pages/play';
import PlayCheat from 'pages/playCheat';

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/configuracoes" element={<Configuracoes />} />
    <Route path="/play" element={<Play />} />
    <Route path="/play/cheat" element={<PlayCheat />} />
  </Routes>
);

export default RoutesComponent;
