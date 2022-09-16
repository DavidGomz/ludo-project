// Pagina para elaboração do jogo
import Mario from '../../assets/images/Mario.svg';
import Wario from '../../assets/images/Wario.svg';
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

export const Game = () => {
  return (
    <div className=" bg-slate-900 min-h-full  w-full flex justify-center items-center gap-[100px] h-screen ">
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
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#6F37AF" />
            <Square color="#6F37AF" />
            <Square color="#D9D9D9" />
            <Square color="#6F37AF" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#6F37AF" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#6F37AF" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#6F37AF" />
            <Square color="#D9D9D9" />
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
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#F84020" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
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
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#D9D9D9" />
            <SquareMiddle color="#FEB019" />
            <SquareMiddle color="#D9D9D9" />
          </div>
        </div>
        <div className="w-full h-2/5 flex">
          <div className="w-2/5 h-full flex justify-center items-center    bg-[#00A800]">
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
            <Square color="#D9D9D9" />
            <Square color="#00A800" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#00A800" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#00A800" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#00A800" />
            <Square color="#D9D9D9" />
            <Square color="#00A800" />
            <Square color="#00A800" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
            <Square color="#D9D9D9" />
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
