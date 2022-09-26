import { useApi } from '../../../services/api';

import Mario from '../../../assets/images/Mario.svg';
import Wario from '../../../assets/images/wario.svg';
import Luigi from '../../../assets/images/Luigi.svg';
import Waluigi from '../../../assets/images/waluigi.svg';
import { Background } from './background';

interface Props {
  id: number;
  color: string;
  background?: 'star' | 'left' | 'top' | 'right' | 'bottom';
}

interface PiecesTypes {
  id: number;
  playerID: string;
  position: number | null;
  src: string;
  final: boolean;
  canEntryFinal: boolean;
}

const square = ({ color, id, background }: Props) => {
  const { room, playerID, moving, diceDiced } = useApi();

  function getFinalCase() {
    let playerIndex;
    let value;

    room?.players.forEach((player, index) => {
      if (player.id === room.turnsPlayer.id) playerIndex = index;
    });
    if (typeof playerIndex !== 'number') return false;
    switch (playerIndex) {
      case 0:
        value = 106;
        break;
      case 1:
        value = 111;
        break;
      case 2:
        value = 116;
        break;
      case 3:
        value = 121;
        break;
    }
    return value;
  }

  function getImage(index: string) {
    if (index === room?.players[0].id) return Mario;
    if (index === room?.players[1].id) return Waluigi;
    if (index === room?.players[2].id) return Wario;
    return Luigi;
  }

  function getPiece() {
    if (!room) return null;
    const arrayPieces: PiecesTypes[] = [];
    room.players.forEach((player) => {
      if (player)
        player.pieces.forEach((piece) => {
          if (piece.position === id) arrayPieces.push(piece);
        });
    });
    return arrayPieces;
  }

  return (
    <div
      className={`w-[33.33%] h-[16.667%] float-left border-[#202020] border bg-[${color}]`}
    >
      <div className="relative w-full h-full flex">
        {background ? <Background image={background} /> : null}
        {room
          ? getPiece()?.map((piece, index, array) => {
              return (
                <img
                  key={index}
                  src={getImage(piece.playerID)}
                  className={`h-full absolute`}
                  style={{
                    left: `${index * 0.3}rem`,
                    zIndex: piece.playerID === playerID ? 2 : 1,
                    opacity:
                      piece.playerID !== playerID && array.length > 1 ? 0.7 : 1,
                    cursor: piece.playerID === playerID ? 'pointer' : 'auto',
                  }}
                  onClick={() => {
                    const final = getFinalCase();
                    if (diceDiced && piece.position) {
                      if (
                        piece.playerID !== playerID ||
                        room.turnsPlayer.id !== playerID ||
                        !moving ||
                        typeof final !== 'number' ||
                        final < diceDiced + piece.position
                      )
                        return;
                      moving(piece);
                    }
                  }}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default square;
