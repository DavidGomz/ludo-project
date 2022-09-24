import { Route, Routes } from 'react-router-dom';
import { Characters } from '../pages/Characters';

import { Game } from '../pages/Game';
import { Home } from '../pages/Home';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/characters" element={<Characters />} />
  </Routes>
);
