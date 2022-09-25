import PlayerName from '../PlayersNames/playerName';

const webChat = () => {
  return (
    <div className="w-[350px] h-[50vh] flex flex-col shadow-[#000000] shadow-lg bg-black text-center">
      <div className="header text-white">
        <h1>LudoChat</h1>
      </div>
      <div className="body  flex  flex-col flex-1 justify-center items-center p-[20px,30px] h-screen bg-white">
        <p className="system-message ml-auto font-inter text-black p-[15px] w-fit rounded-lg mb-[15px]">
          É SUA VEZ DE JOGAR
        </p>
        <p className="user_message mr-auto rounded-[2px] font-intertext-black">
          <PlayerName playerName="jogador 1" playerColor="red" />
        </p>
      </div>
      <div className="footer">
        <form className="flex">
          <input
            type="text"
            name=""
            className="flex flex-1  w-[100px] h-[40px] border-outline-none pl-1 text-lg"
          />
          <button className="w-[100px] text-lg border-none outline-none bg-cyan-500 text-white cursor-pointer hover:bg-sky-700 transition-ease">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default webChat;
