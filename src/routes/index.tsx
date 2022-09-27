import { Route, Routes } from 'react-router-dom';
import { Characters } from '../pages/Characters';

import { Game } from '../pages/Game';
import { Home } from '../pages/Home';
import { FinalResult } from '../pages/FinalResult';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/characters" element={<Characters />} />
    <Route path="/final" element={<FinalResult />} />
  </Routes>
);
