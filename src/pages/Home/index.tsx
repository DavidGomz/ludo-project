// Pagina inicial

import superLudo from '../../assets/images/Super Ludo.svg';
import entrar from '../../assets/images/Entrar.svg';
import GameSound from '../GameSound/sound';

import { useApi } from '../../services/api';
import { useState } from 'react';

export const Home = () => {
  const { init } = useApi();
  const [name, setName] = useState('');
  const [alert, setAlert] = useState<string>();

  return (
    <div className="bg-wallpaper bg-cover min-h-full bg-no-repeat w-full grid place-content-center h-screen">
      <GameSound />
      <div className="max-w-xl min-h-full min-w w-full h-96 pt-12 pb-16 pl-16 pr-16 bg-[#282A42] shadow-[#106ae0] shadow-lg rounded">
        <img src={superLudo} alt="game-Logo" />
        <div className="flex flex-col justify-center  items-center">
          <input
            type="text"
            placeholder="Digite um nome"
            className="mt-20 w-full p-4 rounded-xl h-12 bg-[#404156] text-center text-white"
            onBlur={(e) => {
              setName(e.target.value);
            }}
          />
          <p className="text-[#F84020]">{alert}</p>
          <button
            className="w-[210px] mt-12 bg-gray-200 h-12 rounded-3xl flex justify-center items-center cursor-pointer"
            onClick={() => {
              if (name.length < 3) {
                setAlert('Nome muito curto!');
                return;
              } else if (name.length > 16) {
                setAlert('Nome muito longo!');
                return;
              } else {
                if (init) {
                  init(name);
                }
              }
            }}
          >
            <img src={entrar} alt="login-game cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
