import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import { Router } from './routes';
import { ApiContext } from './services/api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ApiContext>
      <div className="bg-wallpaper bg-cover">
        <Router />
      </div>
    </ApiContext>
  </BrowserRouter>,
);
