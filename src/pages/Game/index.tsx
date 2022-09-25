// Pagina para elaboração do jogo
import PlayerName from '../Components/PlayersNames/playerName';
import WebChat from '../Components/chat/chat';
import { useApi } from '../../services/api';
import Dice from '../Dice/dice';
import { Board } from './board';

export const Game = () => {
  const { room } = useApi();
  return (
    <div className="bg-wallpaper min-h-full w-full flex justify-center items-center gap-[100px] h-screen">
      <div className="w-[40vw] max-w-[600px] min-w-[350px]">
        <div className="flex justify-between px-2">
          <PlayerName
            playerName={room?.players[0] ? room.players[0].name : 'Aguardando'}
            playerColor="#F84020"
            maxWidth="35%"
          />
          <PlayerName
            playerName={room?.players[1] ? room.players[1].name : 'Aguardando'}
            playerColor="#6F37AF"
            maxWidth="35%"
          />
        </div>
        <Board />
        <div className="flex justify-between px-2">
          <PlayerName
            playerName={room?.players[3] ? room.players[3].name : 'Aguardando'}
            playerColor="#00A800"
            maxWidth="35%"
          />
          <PlayerName
            playerName={room?.players[2] ? room.players[2].name : 'Aguardando'}
            playerColor="#FEB019"
            maxWidth="35%"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-[30vw] h-[40vw] gap-5">
        <Dice />
        <WebChat />
      </div>
    </div>
  );
};
