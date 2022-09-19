// Pagina para elaboração do jogo
import Mario from '../../assets/images/Mario.svg';
import Wario from '../../assets/images/Wario.png';
import Luigi from '../../assets/images/Luigi.svg';
import Waluigi from '../../assets/images/waluigi.svg';
import Square from '../Components/squares/square';
import SquareMiddle from '../Components/squares/square-middle';
import TriangleRight from '../Components/triangles/triangle-right';
import TriangleUp from '../Components/triangles/triangle-up';
import TriangleLeft from '../Components/triangles/triangle-left';
import TriangleDown from '../Components/triangles/triangle-down';
import MoveImage from '../Components/animation/animateWario';
import volumeMedium from '../../assets/images/volume-medium.svg';
import { useEffect, useState } from 'react';

interface PlayersTypes {
  id: number;
  color: string;
  pieces: PiecesTypes[];
}

interface PiecesTypes {
  id: number;
  playerId: number;
  position: number | null;
  src: string;
  finish: boolean;
}

export const Game = () => {
  const playerId = 1;
  const [players, setPlayers] = useState<PlayersTypes[]>([]);
  const [cont, setCont] = useState(0);
  const [squareChildren, setSquareChildren] = useState([
    {
      color: null,
      id: 1,
      pieces: [
        { id: 1, playerId: 2, position: 0, src: Mario, finish: false },
        { id: 1, playerId: 1, position: 0, src: Luigi, finish: false },
      ],
    },
    {
      color: null,
      id: 2,
      pieces: [],
    },
    {
      color: null,
      id: 3,
      pieces: [],
    },
    {
      color: null,
      id: 4,
      pieces: [{ id: 1, playerId: 2, position: 0, src: Mario, finish: false }],
    },
    {
      color: null,
      id: 5,
      pieces: [],
    },
    {
      color: null,
      id: 6,
      pieces: [],
    },
    {
      color: null,
      id: 7,
      pieces: [],
    },
    {
      color: null,
      id: 8,
      pieces: [],
    },
    {
      color: null,
      id: 9,
      pieces: [],
    },
    {
      color: null,
      id: 10,
      pieces: [],
    },
    {
      color: null,
      id: 11,
      pieces: [],
    },
    {
      color: null,
      id: 12,
      pieces: [],
    },
    {
      color: null,
      id: 13,
      pieces: [],
    },
    {
      color: null,
      id: 14,
      pieces: [],
    },
    {
      color: null,
      id: 15,
      pieces: [],
    },
    {
      color: null,
      id: 16,
      pieces: [],
    },
    {
      color: null,
      id: 17,
      pieces: [],
    },
    {
      color: null,
      id: 18,
      pieces: [],
    },
    {
      color: null,
      id: 19,
      pieces: [],
    },
    {
      color: null,
      id: 20,
      pieces: [],
    },
    {
      color: null,
      id: 21,
      pieces: [],
    },
    {
      color: null,
      id: 22,
      pieces: [],
    },
    {
      color: null,
      id: 23,
      pieces: [],
    },
    {
      color: null,
      id: 24,
      pieces: [],
    },
    {
      color: null,
      id: 25,
      pieces: [],
    },
    {
      color: null,
      id: 26,
      pieces: [],
    },
    {
      color: null,
      id: 27,
      pieces: [],
    },
    {
      color: null,
      id: 28,
      pieces: [],
    },
    {
      color: null,
      id: 29,
      pieces: [],
    },
    {
      color: null,
      id: 30,
      pieces: [],
    },
    {
      color: null,
      id: 31,
      pieces: [],
    },
    {
      color: null,
      id: 32,
      pieces: [],
    },
    {
      color: null,
      id: 33,
      pieces: [],
    },
    {
      color: null,
      id: 34,
      pieces: [],
    },
    {
      color: null,
      id: 35,
      pieces: [],
    },
    {
      color: null,
      id: 36,
      pieces: [],
    },
    {
      color: null,
      id: 37,
      pieces: [],
    },
    {
      color: null,
      id: 38,
      pieces: [],
    },
    {
      color: null,
      id: 39,
      pieces: [],
    },
    {
      color: null,
      id: 40,
      pieces: [],
    },
    {
      color: null,
      id: 41,
      pieces: [],
    },
    {
      color: null,
      id: 42,
      pieces: [],
    },
    {
      color: null,
      id: 43,
      pieces: [],
    },
    {
      color: null,
      id: 44,
      pieces: [],
    },
    {
      color: null,
      id: 45,
      pieces: [],
    },
    {
      color: null,
      id: 46,
      pieces: [],
    },
    {
      color: null,
      id: 47,
      pieces: [],
    },
    {
      color: null,
      id: 48,
      pieces: [],
    },
    {
      color: null,
      id: 49,
      pieces: [],
    },
    {
      color: null,
      id: 50,
      pieces: [],
    },
    {
      color: null,
      id: 51,
      pieces: [],
    },
    {
      color: null,
      id: 52,
      pieces: [],
    },
  ]);

  function handleCasePiece(initial: number, piece: PiecesTypes) {
    const newCaseArray = squareChildren;
    console.log(initial, piece);

    if (cont === 51) {
      newCaseArray[0].pieces.push(
        ...newCaseArray[initial].pieces.filter((item) => {
          return item.id === piece.id && item.playerId === piece.playerId;
        }),
      );
      newCaseArray[initial].pieces = squareChildren[initial].pieces.filter(
        (item) => {
          return item.id !== piece.id || item.playerId !== piece.playerId;
        },
      );
      setCont(0);
    } else {
      newCaseArray[initial + 1].pieces.push(
        ...newCaseArray[initial].pieces.filter((item) => {
          return item.id === piece.id && item.playerId === piece.playerId;
        }),
      );
      newCaseArray[initial].pieces = squareChildren[initial].pieces.filter(
        (item) => {
          return item.id !== piece.id || item.playerId !== piece.playerId;
        },
      );
      setCont(initial + 1);
    }
    setSquareChildren(newCaseArray);
  }

  useEffect(() => {
    setPlayers([
      {
        id: 1,
        color: 'purple',
        pieces: [
          { id: 1, playerId: 1, position: null, src: Waluigi, finish: false },
          { id: 2, playerId: 1, position: null, src: Waluigi, finish: false },
          { id: 3, playerId: 1, position: null, src: Waluigi, finish: false },
          { id: 4, playerId: 1, position: null, src: Waluigi, finish: false },
        ],
      },
      {
        id: 2,
        color: 'yellow',
        pieces: [
          { id: 1, playerId: 2, position: null, src: Wario, finish: false },
          { id: 2, playerId: 2, position: null, src: Wario, finish: false },
          { id: 3, playerId: 2, position: null, src: Wario, finish: false },
          { id: 4, playerId: 2, position: null, src: Wario, finish: false },
        ],
      },
      {
        id: 3,
        color: 'green',
        pieces: [
          { id: 1, playerId: 3, position: null, src: Luigi, finish: false },
          { id: 2, playerId: 3, position: null, src: Luigi, finish: false },
          { id: 3, playerId: 3, position: null, src: Luigi, finish: false },
          { id: 4, playerId: 3, position: null, src: Luigi, finish: false },
        ],
      },
      {
        id: 4,
        color: 'red',
        pieces: [
          { id: 1, playerId: 4, position: null, src: Mario, finish: false },
          { id: 2, playerId: 4, position: null, src: Mario, finish: false },
          { id: 3, playerId: 4, position: null, src: Mario, finish: false },
          { id: 4, playerId: 4, position: null, src: Mario, finish: false },
        ],
      },
    ]);
  }, []);

  return (
    <div className=" bg-slate-900 min-h-full  w-full flex justify-center items-center gap-[100px] h-screen ">
      <button
        className="bg-white"
        onClick={() => {
          handleCasePiece(cont, {
            id: 1,
            playerId: 1,
            position: 0,
            src: Luigi,
            finish: false,
          });
        }}
      >
        Move
      </button>
      <MoveImage />
      <div className="w-[600px] h-[600px] cursor-pointer bg-slate-50">
        <div className="w-full h-2/5 flex">
          <div className="w-2/5 h-full flex justify-center items-center border  bg-[#F84020]">
            <div className="w-[70%] h-[70%] bg-white">
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Mario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Mario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Mario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Mario} />
              </div>
            </div>
          </div>
          <div className="w-1/5 h-full">
            <Square
              id={1}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[0].pieces}
            />
            <Square
              id={2}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[1].pieces}
            />
            <Square
              id={3}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[2].pieces}
            />
            <Square
              id={52}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[51].pieces}
            />
            {/*  */}
            <Square color="#6F37AF" />
            {/*  */}
            <Square
              id={4}
              color="#6F37AF"
              playerId={playerId}
              pieces={squareChildren[3].pieces}
            />
            <Square
              id={51}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[50].pieces}
            />
            {/*  */}
            <Square color="#6F37AF" />
            {/*  */}
            <Square
              id={5}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[4].pieces}
            />
            <Square
              id={50}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[49].pieces}
            />
            {/*  */}
            <Square color="#6F37AF" />
            {/*  */}
            <Square
              id={6}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[5].pieces}
            />
            <Square
              id={49}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[48].pieces}
            />
            {/*  */}
            <Square color="#6F37AF" />
            {/*  */}
            <Square
              id={7}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[6].pieces}
            />
            <Square
              id={48}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[47].pieces}
            />
            {/*  */}
            <Square color="#6F37AF" />
            {/*  */}
            <Square
              id={8}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[7].pieces}
            />
          </div>
          <div className="w-2/5 h-full flex justify-center items-center   bg-[#6F37AF]">
            <div className="w-[70%] h-[70%] bg-white">
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Waluigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Waluigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <img src={Waluigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <img src={Waluigi} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 flex">
          <div className="w-2/5 h-full">
            <SquareMiddle
              id={squareChildren[41].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[41].pieces}
            />
            <SquareMiddle
              id={squareChildren[42].id}
              color="#F84020"
              playerId={playerId}
              pieces={squareChildren[42].pieces}
            />
            <SquareMiddle
              id={squareChildren[43].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[43].pieces}
            />
            <SquareMiddle
              id={squareChildren[44].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[44].pieces}
            />
            <SquareMiddle
              id={squareChildren[45].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[45].pieces}
            />
            <SquareMiddle
              id={squareChildren[46].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[46].pieces}
            />
            <SquareMiddle
              id={squareChildren[40].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[40].pieces}
            />
            {/*  */}
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            {/*  */}
            <SquareMiddle
              id={squareChildren[39].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[39].pieces}
            />
            <SquareMiddle
              id={squareChildren[38].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[38].pieces}
            />
            <SquareMiddle
              id={squareChildren[37].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[37].pieces}
            />
            <SquareMiddle
              id={squareChildren[36].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[36].pieces}
            />
            <SquareMiddle
              id={squareChildren[35].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[35].pieces}
            />
            <SquareMiddle
              id={squareChildren[34].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[34].pieces}
            />
          </div>
          <div className="w-1/5 h-full">
            <div className="w-full h-full relative">
              <TriangleRight />
              <TriangleUp />
              <TriangleLeft />
              <TriangleDown />
            </div>
          </div>
          <div className="w-2/5 h-full">
            <SquareMiddle
              id={squareChildren[8].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[8].pieces}
            />
            <SquareMiddle
              id={squareChildren[9].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[9].pieces}
            />
            <SquareMiddle
              id={squareChildren[10].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[10].pieces}
            />
            <SquareMiddle
              id={squareChildren[11].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[11].pieces}
            />
            <SquareMiddle
              id={squareChildren[12].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[12].pieces}
            />
            <SquareMiddle
              id={squareChildren[13].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[13].pieces}
            />
            {/*  */}
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            {/*  */}
            <SquareMiddle
              id={squareChildren[14].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[14].pieces}
            />
            <SquareMiddle
              id={squareChildren[20].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[20].pieces}
            />
            <SquareMiddle
              id={squareChildren[19].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[19].pieces}
            />
            <SquareMiddle
              id={squareChildren[18].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[18].pieces}
            />
            <SquareMiddle
              id={squareChildren[17].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[17].pieces}
            />
            <SquareMiddle
              id={squareChildren[16].id}
              color="#FEB019"
              playerId={playerId}
              pieces={squareChildren[16].pieces}
            />
            <SquareMiddle
              id={squareChildren[15].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[15].pieces}
            />
          </div>
        </div>
        <div className="w-full h-2/5 flex">
          <div className="w-2/5 h-full flex justify-center items-center bg-[#00A800]">
            <div className="w-[70%] h-[70%] bg-white">
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center flex items-center">
                <img src={Luigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full items-center justify-center flex">
                <img src={Luigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full items-center justify-center flex">
                <img src={Luigi} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Luigi} />
              </div>
            </div>
          </div>
          <div className="w-1/5 h-full">
            <Square
              id={squareChildren[33].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[33].pieces}
            />
            {/*  */}
            <Square color="#00A800" />
            {/*  */}
            <Square
              id={squareChildren[21].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[21].pieces}
            />
            <Square
              id={squareChildren[32].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[32].pieces}
            />
            {/*  */}
            <Square color="#00A800" />
            {/*  */}
            <Square
              id={squareChildren[22].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[22].pieces}
            />
            <Square
              id={squareChildren[31].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[31].pieces}
            />
            {/*  */}
            <Square color="#00A800" />
            {/*  */}
            <Square
              id={squareChildren[23].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[23].pieces}
            />
            <Square
              id={squareChildren[30].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[30].pieces}
            />
            {/*  */}
            <Square color="#00A800" />
            {/*  */}
            <Square
              id={squareChildren[24].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[24].pieces}
            />
            <Square
              id={squareChildren[29].id}
              color="#00A800"
              playerId={playerId}
              pieces={squareChildren[29].pieces}
            />
            {/*  */}
            <Square color="#00A800" />
            {/*  */}
            <Square
              id={squareChildren[25].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[25].pieces}
            />
            <Square
              id={squareChildren[28].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[28].pieces}
            />
            <Square
              id={squareChildren[27].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[27].pieces}
            />
            <Square
              id={squareChildren[26].id}
              color="#D9D9D9"
              playerId={playerId}
              pieces={squareChildren[26].pieces}
            />
          </div>
          <div className="w-2/5 h-full flex justify-center items-center  bg-[#FEB019]">
            <div className="w-[70%] h-[70%] bg-white">
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Wario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Wario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Wario} />
              </div>
              <div className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex">
                <img src={Wario} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
