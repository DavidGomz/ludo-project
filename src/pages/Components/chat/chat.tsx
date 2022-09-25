import { PaperPlaneRight } from 'phosphor-react';
import PlayerName from '../PlayersNames/playerName';

const webChat = () => {
  return (
    <div className="w-full h-3/6 flex flex-col bg-white text-center min-w-[350px] min-h-[220px]">
      <div className="text-white bg-cyan-500 py-1">
        <h1>LudoChat</h1>
      </div>
      <div className="w-full h-full overflow-auto">
        <div className="w-full flex flex-col-reverse justify-end gap-1">
          {/* mensagens de outros players */}
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
          <div className="flex flex-col flex-1 p-4 h-screen text-left bg-white text-[0.7rem] font-inter text-black">
            <PlayerName
              playerName="jogador 1:"
              playerColor="red"
              fontSize="0.7rem"
            />
            <p></p>
          </div>
        </div>
      </div>
      <form className="flex border-l-2 border-cyan-500">
        <input
          type="text"
          className="flex flex-1 w-[100px] h-[40px] pl-1 text-lg"
        />
        <button className="text-base border-none bg-cyan-500 text-white cursor-pointer hover:bg-sky-700 transition-ease p-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default webChat;
