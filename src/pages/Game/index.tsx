// Pagina para elaboração do jogo
import superLudo from '../../assets/images/Super Ludo.svg';

import entrar from '../../assets/images/Entrar.svg';

export const Game = () => {
  return (
    <div className="bg-slate-900  grid place-content-center h-screen ">
      <div className="max-w-xl w-full h-96 pt-12 pb-16 pl-16 pr-16 bg-[#282A42] shadow-[#106ae0] shadow-lg ">
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
    </div>
  );
};
