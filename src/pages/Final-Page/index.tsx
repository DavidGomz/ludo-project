import Peach from '../../assets/images/peach.svg';
import playerName from '../Components/PlayersNames/playerName';
import Mario from '../../assets/images/Mario.svg';

export const finalResult = () => {
  return (
    <div className="bg-[url('./src/assets/images/background.jpg')] min-h-full  w-full grid place-content-center h-screen">
      <div className="text-white text-center w-full bg-[#FEB019] py-1 rounded-t-xl">
        <h1>Vitória</h1>
      </div>
      <div className="flex  bg-[#F7F7F7] text-justify justify-center items-center rounded-b-xl w-[700px] h-[200px]">
        <p className="text-justify text-xs">
          Parabéns jogador 1,<br></br>
          você venceu!<br></br>
          Sua princesa está<br></br>
          orgulhosa!!
        </p>
        <img
          className="w-[200px] h-[200px] animate-bounce"
          src={Peach}
          alt="Peach"
        />
        <img className="w-[150px] h-[100px] z-[1]" src={Mario} alt="Mario" />
      </div>
      <div className="flex mt-[50px] gap-[20px] justify-center ">
        <button className="bg-black w-[141px] h-[70px] text-center text-yellow-400 rounded p-[20px]">
          Sair
        </button>
        <button className="bg-white w-[141px] h-[70px] text-center text-black rounded p-[20px]">
          Jogar!
        </button>
      </div>
    </div>
  );
};

export default finalResult;
