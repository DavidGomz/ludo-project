// Pagina para elaboração do jogo
import PlayerName from '../Components/PlayersNames/playerName';
import WebChat from '../Components/chat/chat';
import GameSound from '../GameSound/sound';
import { useApi } from '../../services/api';
import Dice from '../Dice/dice';
import { Board } from './board';
import { ArrowFatLinesLeft, ArrowFatLinesRight } from 'phosphor-react';
import { Messages } from './messages';

export const Game = () => {
  const { room } = useApi();
  return (
    <div className="min-h-full w-full flex justify-center items-center gap-[100px] h-screen">
      <div className="w-[40vw] max-w-[600px] min-w-[350px]">
        <div className="flex justify-between px-2">
          <div className="flex gap-1">
            <GameSound />
            <PlayerName
              playerName={
                room?.players[0] ? room.players[0].name : 'Aguardando'
              }
              playerColor="#F84020"
            />
            {room?.turnsPlayer &&
            room?.turnsPlayer &&
            room?.turnsPlayer.id === room?.players[0].id ? (
              <ArrowFatLinesLeft size={20} />
            ) : null}
          </div>
          <div className="flex gap-1">
            {room?.turnsPlayer &&
            room?.turnsPlayer.id === room?.players[1].id ? (
              <ArrowFatLinesRight size={20} />
            ) : null}
            <PlayerName
              playerName={
                room?.players[1] ? room.players[1].name : 'Aguardando'
              }
              playerColor="#6F37AF"
            />
          </div>
        </div>
        <Board />
        <div className="flex justify-between px-2">
          <div className="flex gap-1">
            <PlayerName
              playerName={
                room?.players[3] ? room.players[3].name : 'Aguardando'
              }
              playerColor="#00A800"
            />
            {room?.turnsPlayer &&
            room?.turnsPlayer.id === room?.players[3].id ? (
              <ArrowFatLinesLeft size={20} />
            ) : null}
          </div>
          <div className="flex gap-1">
            {room?.turnsPlayer &&
            room?.turnsPlayer.id === room?.players[2].id ? (
              <ArrowFatLinesRight size={20} />
            ) : null}
            <PlayerName
              playerName={
                room?.players[2] ? room.players[2].name : 'Aguardando'
              }
              playerColor="#FEB019"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-[30vw] h-[40vw] gap-5">
        <Messages />
        <Dice />
        <WebChat />
      </div>
    </div>
  );
};
