// Pagina para elaboração do jogo
import Square from '../Components/squares/square';
import SquareMiddle from '../Components/squares/square-middle';

import DiceRoll from '../Dice/dice';
import { useApi } from '../../services/api';
import { Cases } from './cases';
import center from '../../assets/images/center.png';
import Dice from '../Dice/dice';
import { FinishedPieces } from './finishedPieces';

interface PlayersTypes {
  id: string;
  color: string;
  pieces: PiecesTypes[];
}

interface PiecesTypes {
  id: number;
  playerID: string;
  position: number | null;
  src: string;
  final: boolean;
  canEntryFinal: boolean;
  finished: boolean;
}

export const Game = () => {
  const { room } = useApi();
  return (
    <div className=" bg-slate-900 min-h-full  w-full flex justify-center items-center gap-[100px] h-screen ">
      <Dice />
      {!room ? null : (
        <div className="w-[600px] h-[600px]">
          <div className="w-full h-2/5 flex">
            <div className="w-2/5 h-full flex justify-center items-center border  bg-[#F84020]">
              <Cases player={room.players[0]} playerIndex={0} />
            </div>
            <div className="w-1/5 h-full">
              <Square id={11} color="#D9D9D9" />
              <Square id={12} color="#D9D9D9" background="top" />
              <Square id={13} color="#D9D9D9" />
              <Square id={10} color="#D9D9D9" />
              {/*  */}
              <Square id={106} color="#6F37AF" />
              {/*  */}
              <Square id={14} color="#6F37AF" />
              <Square id={9} color="#D9D9D9" background="star" />
              {/*  */}
              <Square id={107} color="#6F37AF" />
              {/*  */}
              <Square id={15} color="#D9D9D9" />
              <Square id={8} color="#D9D9D9" />
              {/*  */}
              <Square id={108} color="#6F37AF" />
              {/*  */}
              <Square id={16} color="#D9D9D9" />
              <Square id={7} color="#D9D9D9" />
              {/*  */}
              <Square id={109} color="#6F37AF" />
              {/*  */}
              <Square id={17} color="#D9D9D9" />
              <Square id={6} color="#D9D9D9" />
              {/*  */}
              <Square id={110} color="#6F37AF" />
              {/*  */}
              <Square id={18} color="#D9D9D9" />
            </div>
            <div className="w-2/5 h-full flex justify-center items-center bg-[#6F37AF]">
              <Cases player={room.players[1]} playerIndex={1} />
            </div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="w-2/5 h-full">
              <SquareMiddle id={52} color="#D9D9D9" />
              <SquareMiddle id={1} color="#F84020" />
              <SquareMiddle id={2} color="#D9D9D9" />
              <SquareMiddle id={3} color="#D9D9D9" />
              <SquareMiddle id={4} color="#D9D9D9" />
              <SquareMiddle id={5} color="#D9D9D9" />
              <SquareMiddle id={51} color="#D9D9D9" background="left" />
              {/*  */}
              <SquareMiddle id={101} color="#F84020" />
              <SquareMiddle id={102} color="#F84020" />
              <SquareMiddle id={103} color="#F84020" />
              <SquareMiddle id={104} color="#F84020" />
              <SquareMiddle id={105} color="#F84020" />
              {/*  */}
              <SquareMiddle id={50} color="#D9D9D9" />
              <SquareMiddle id={49} color="#D9D9D9" />
              <SquareMiddle id={48} color="#D9D9D9" background="star" />
              <SquareMiddle id={47} color="#D9D9D9" />
              <SquareMiddle id={46} color="#D9D9D9" />
              <SquareMiddle id={45} color="#D9D9D9" />
            </div>
            <div className="w-1/5 h-full relative bg-midBoard bg-cover">
              <FinishedPieces />
            </div>
            <div className="w-2/5 h-full">
              <SquareMiddle id={19} color="#D9D9D9" />
              <SquareMiddle id={20} color="#D9D9D9" />
              <SquareMiddle id={21} color="#D9D9D9" />
              <SquareMiddle id={22} color="#D9D9D9" background="star" />
              <SquareMiddle id={23} color="#D9D9D9" />
              <SquareMiddle id={24} color="#D9D9D9" />
              {/*  */}
              <SquareMiddle id={115} color="#FEB019" />
              <SquareMiddle id={114} color="#FEB019" />
              <SquareMiddle id={113} color="#FEB019" />
              <SquareMiddle id={112} color="#FEB019" />
              <SquareMiddle id={111} color="#FEB019" />
              {/*  */}
              <SquareMiddle id={25} color="#D9D9D9" background="right" />
              <SquareMiddle id={31} color="#D9D9D9" />
              <SquareMiddle id={30} color="#D9D9D9" />
              <SquareMiddle id={29} color="#D9D9D9" />
              <SquareMiddle id={28} color="#D9D9D9" />
              <SquareMiddle id={27} color="#FEB019" />
              <SquareMiddle id={26} color="#D9D9D9" />
            </div>
          </div>
          <div className="w-full h-2/5 flex">
            <div className="w-2/5 h-full flex justify-center items-center bg-[#00A800]">
              <Cases player={room.players[3]} playerIndex={3} />
            </div>
            <div className="w-1/5 h-full">
              <Square id={44} color="#D9D9D9" />
              {/*  */}
              <Square id={120} color="#00A800" />
              {/*  */}
              <Square id={32} color="#D9D9D9" />
              <Square id={43} color="#D9D9D9" />
              {/*  */}
              <Square id={119} color="#00A800" />
              {/*  */}
              <Square id={33} color="#D9D9D9" />
              <Square id={42} color="#D9D9D9" />
              {/*  */}
              <Square id={118} color="#00A800" />
              {/*  */}
              <Square id={34} color="#D9D9D9" />
              <Square id={41} color="#D9D9D9" />
              {/*  */}
              <Square id={117} color="#00A800" />
              {/*  */}
              <Square id={35} color="#D9D9D9" background="star" />
              <Square id={40} color="#00A800" />
              {/*  */}
              <Square id={116} color="#00A800" />
              {/*  */}
              <Square id={36} color="#D9D9D9" />
              <Square id={39} color="#D9D9D9" />
              <Square id={38} color="#D9D9D9" background="bottom" />
              <Square id={37} color="#D9D9D9" />
            </div>
            <div className="w-2/5 h-full flex justify-center items-center bg-[#FEB019]">
              <Cases player={room.players[2]} playerIndex={2} />
            </div>
          </div>
          <DiceRoll />
        </div>
      )}
    </div>
  );
};
