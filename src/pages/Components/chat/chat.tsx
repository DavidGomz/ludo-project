import { useEffect, useRef } from 'react';
import { useApi } from '../../../services/api';
import playerName from '../PlayersNames/playerName';
import PlayerName from '../PlayersNames/playerName';

const webChat = () => {
  const { chat, playerIndex } = useApi();
  const divOverflow = useRef<HTMLDivElement | null>(null);

  function getColor(index?: number) {
    if (index === 0) return '#F84020';
    if (index === 1) return '#6F37AF';
    if (index === 2) return '#FEB019';
    if (index === 3) return '#00A800';
    return '#06B6D4';
  }

  useEffect(() => {
    if (divOverflow.current === null) return;

    const isScrolled =
      divOverflow.current.scrollTop ==
      divOverflow.current.scrollHeight - divOverflow.current.offsetHeight;
    console.log(divOverflow.current.scrollHeight);

    if (!isScrolled)
      divOverflow.current.scrollTop = divOverflow.current.scrollHeight;
  }, [chat, playerIndex]);

  return (
    <div className="w-full h-3/6 flex flex-col bg-white text-center min-w-[350px] min-h-[220px]">
      <div className="text-white bg-cyan-500 py-1">
        <h1>LudoChat</h1>
      </div>
      <div className="w-full h-full overflow-auto" ref={divOverflow}>
        <div className="w-full flex flex-col justify-end">
          {chat
            ? chat.map((message) =>
                playerIndex !== message.index ? (
                  <div className="flex flex-col p-1 text-left bg-white text-[0.7rem] font-inter text-black">
                    <PlayerName
                      playerName={
                        message.playerName
                          ? `${message.playerName}:`
                          : 'Sistema:'
                      }
                      playerColor={getColor(message.index)}
                      fontSize="0.7rem"
                      width="100%"
                    />
                    <span className="w-[90%]">{message.content}</span>
                  </div>
                ) : (
                  <div className="flex flex-col p-1 text-right items-end bg-white text-[0.7rem] font-inter text-black">
                    <PlayerName
                      playerName={
                        message.playerName
                          ? `:${message.playerName}`
                          : 'Sistema'
                      }
                      playerColor={`${getColor(message.index)}`}
                      fontSize="0.7rem"
                    />
                    <span className="w-[90%]">{message.content}</span>
                  </div>
                ),
              )
            : null}
        </div>
      </div>
      <form className="flex border-2 border-cyan-500">
        <input
          type="text"
          className="flex flex-1 w-[100px] h-[40px] pl-1 text-lg"
        />
        <button className="text-base bg-cyan-500 text-white cursor-pointer hover:bg-sky-700 transition-ease p-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default webChat;
