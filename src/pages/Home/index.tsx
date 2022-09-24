// Pagina inicial

import superLudo from '../../assets/images/Super Ludo.svg';

import entrar from '../../assets/images/Entrar.svg';
import volumeMedium from '../../assets/images/volume-medium.svg';

import { useApi } from '../../services/api';
import { useRef, useState } from 'react';

export const Home = () => {
  const { init } = useApi();
  const [name, setName] = useState('');

  return (
    <div className="bg-slate-900 min-h-full  w-full grid place-content-center h-screen">
      <div className="max-w-xl min-h-full min-w w-full h-96 pt-12 pb-16 pl-16 pr-16 bg-[#282A42] shadow-[#106ae0] shadow-lg ">
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
          <button
            className="w-[210px] mt-12 bg-gray-200 h-12 rounded-3xl flex justify-center items-center cursor-pointer"
            onClick={() => {
              if (init && name.length > 3) {
                init(name);
              }
            }}
          >
            <img src={entrar} alt="login-game cursor-pointer" />
          </button>
        </div>
      </div>
      <img
        className="justify-self-end self-end mt-12 cursor-pointer"
        src={volumeMedium}
        alt="sound-page"
      />
    </div>
  );
};
