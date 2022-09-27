import Peach from '../../assets/images/peach.svg';
import playerName from '../Components/PlayersNames/playerName';
import Mario from '../../assets/images/Mario.svg';
import { useApi } from '../../services/api';

export const FinalResult = () => {
  const { playAgain } = useApi();

  return (
    <div className="min-h-full w-full grid place-content-center h-screen">
      <div className="text-white text-center w-full bg-[#FEB019] py-1 rounded-t-xl">
        <h1 className="text-[1.5rem]">Vitória</h1>
      </div>
      <div className="flex text-[1.25rem] bg-[#F7F7F7] text-justify justify-center items-center rounded-b-xl w-[700px] h-[200px]">
        <p className="text-justify text-xs flex flex-col pl-7">
          <span>Parabéns "playerName",</span>
          <span>você venceu!</span>
          <span>Sua princesa está</span>
          <span>orgulhosa!!</span>
        </p>
        <img className="h-4/5 animate-bounce" src={Peach} alt="Peach" />
        <img className="h-4/6 z-[1]" src={Mario} alt="Mario" />
      </div>
      <div className="flex mt-[50px] gap-[20px] justify-center ">
        <button
          className="bg-black w-[141px] h-[70px] text-center text-yellow-400 rounded p-[20px]"
          onClick={() => {
            if (!playAgain) return;
            playAgain(false);
          }}
        >
          Sair
        </button>
        <button
          className="bg-white w-[141px] h-[70px] text-center text-black rounded p-[20px]"
          onClick={() => {
            if (!playAgain) return;
            playAgain(true);
          }}
        >
          Jogar!
        </button>
      </div>
    </div>
  );
};
