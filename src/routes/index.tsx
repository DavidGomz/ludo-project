import { Route, Routes } from 'react-router-dom';

import { Game2 } from '../pages/Game/index2';
import { Game } from '../pages/Game';
import { Home } from '../pages/Home';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/game2" element={<Game2 />} />
  </Routes>
);
