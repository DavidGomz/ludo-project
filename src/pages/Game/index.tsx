// Pagina para elaboração do jogo
import superLudo from '../../assets/images/Super Ludo.svg';

import entrar from '../../assets/images/Entrar.svg';

import bgImage from '../../assets/images/bg-image.jpg';

import volumeMedium from '../../assets/images/volume-medium.svg';

export const Game = () => {
  return (
    <div className=" bg-slate-900 min-h-full  w-full grid place-content-center h-screen ">
      <div className="max-w-xl min-h-full min-w w-full h-96 pt-12 pb-16 pl-16 pr-16 bg-[#282A42] shadow-[#106ae0] shadow-lg ">
        <img src={superLudo} alt="game-Logo" />
        <form action="" className="flex flex-col justify-center  items-center">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="mt-20 w-full p-4 rounded-xl h-12 bg-[#404156] text-center"
          />
          <button className="w-[210px] mt-12 bg-gray-200 h-12 rounded-3xl flex justify-center items-center">
            <img src={entrar} alt="login-game" />
          </button>
        </form>
      </div>
      <img
        className="justify-self-end self-end mt-12 cursor-pointer"
        src={volumeMedium}
        alt="sound-page"
      />
    </div>
  );
};
