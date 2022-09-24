import { useApi } from '../../services/api';

import Mario from '../../assets/images/Mario.svg';
import Wario from '../../assets/images/wario.svg';
import Luigi from '../../assets/images/Luigi.svg';
import Waluigi from '../../assets/images/waluigi.svg';

export const FinishedPieces = () => {
  const { room } = useApi();
  let cont = 0;
  function getImage(index: string) {
    if (index === room?.players[0].id) return Mario;
    if (index === room?.players[1].id) return Waluigi;
    if (index === room?.players[2].id) return Wario;
    if (index === room?.players[3].id) return Luigi;
  }

  if (!room || !room.players) return <></>;
  room.players.forEach((player) => {
    if (player) cont++;
  });
  if (cont !== 4) return <></>;
  return (
    <div className="w-full h-full relative">
      {/* Top */}
      <div
        className="absolute top-0 right-1/2 w-3/5 h-2/5 flex-col"
        style={{ transform: 'translate(50%, 0%)' }}
      >
        <div className="w-full h-1/2 flex">
          <div className="h-full w-1/2">
            {room.players[1].pieces[0].position === 0 ? (
              <img src={getImage(room.players[1].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="h-full w-1/2">
            {room.players[1].pieces[1].position === 0 ? (
              <img src={getImage(room.players[1].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="h-full w-1/2">
            {room.players[1].pieces[2].position === 0 ? (
              <img src={getImage(room.players[1].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="h-full w-2/6">
            {room.players[1].pieces[3].position === 0 ? (
              <img src={getImage(room.players[1].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
      </div>
      {/* Top */}
      {/* Bottom */}
      <div
        className="absolute bottom-0 right-1/2 w-3/5 h-2/5 flex-col"
        style={{ transform: 'translate(50%, 0%)' }}
      >
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="h-full w-2/6">
            {room.players[3].pieces[0].position === 0 ? (
              <img src={getImage(room.players[3].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
        <div className="w-full h-1/2 flex">
          <div className="h-full w-1/2">
            {room.players[3].pieces[1].position === 0 ? (
              <img src={getImage(room.players[3].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="h-full w-1/2">
            {room.players[3].pieces[2].position === 0 ? (
              <img src={getImage(room.players[3].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="h-full w-1/2">
            {room.players[3].pieces[3].position === 0 ? (
              <img src={getImage(room.players[3].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
      </div>
      {/* Bottom end */}
      {/* Right */}
      <div
        className="absolute right-0 top-1/2 w-2/5 h-3/5 flex"
        style={{ transform: 'translate(0%, -50%)' }}
      >
        <div className="h-full w-1/2 flex items-center justify-center">
          <div className="w-full h-2/6">
            {room.players[2].pieces[0].position === 0 ? (
              <img src={getImage(room.players[2].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
        <div className="h-full w-1/2 flex-col">
          <div className="w-full h-2/6">
            {room.players[2].pieces[1].position === 0 ? (
              <img src={getImage(room.players[2].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="w-full h-2/6">
            {room.players[2].pieces[2].position === 0 ? (
              <img src={getImage(room.players[2].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="w-full h-2/6">
            {room.players[2].pieces[3].position === 0 ? (
              <img src={getImage(room.players[2].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
      </div>
      {/* Right end */}
      {/* Left */}
      <div
        className="absolute left-0 top-1/2 w-2/5 h-3/5 flex"
        style={{ transform: 'translate(0%, -50%)' }}
      >
        <div className="h-full w-1/2 flex-col">
          <div className="w-full h-2/6">
            {room.players[0].pieces[0].position === 0 ? (
              <img src={getImage(room.players[0].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="w-full h-2/6">
            {room.players[0].pieces[1].position === 0 ? (
              <img src={getImage(room.players[0].id)} className={`h-full`} />
            ) : null}
          </div>
          <div className="w-full h-2/6">
            {room.players[0].pieces[2].position === 0 ? (
              <img src={getImage(room.players[0].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
        <div className="h-full w-1/2 flex items-center justify-center">
          <div className="w-full h-2/6">
            {room.players[0].pieces[3].position === 0 ? (
              <img src={getImage(room.players[0].id)} className={`h-full`} />
            ) : null}
          </div>
        </div>
      </div>
      {/* Left end */}
    </div>
  );
};
