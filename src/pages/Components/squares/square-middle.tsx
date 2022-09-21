import { useApi } from '../../../services/api';

interface Props {
  id?: number;
  color: string;
  playerId?: string;
  pieces?: PiecesTypes[];
}

interface PiecesTypes {
  playerId?: string;
  src: string;
}

interface DataTypes {
  width: number;
  height: number;
}

const squareMiddle = ({ color, pieces, playerId, id }: Props) => {
  const { room, playerID } = useApi();
  function getPiece() {
    if (!room) return null;
    const arrayPieces = [];
    room.array.forEach((element) => {});
  }

  return (
    <div
      className={`w-[16.667%] h-[33.33%] float-left border-[#202020] border bg-[${color}]`}
    >
      <div className="relative w-full h-full flex">
        {room
          ? pieces?.map((piece, index, array) => {
              return (
                <img
                  key={index}
                  src={piece.src}
                  className={`h-full absolute`}
                  style={{
                    left: `${index * 0.3}rem`,
                    zIndex: piece.playerId === playerId ? 2 : 0,
                    opacity:
                      piece.playerId !== playerId && array.length > 1 ? 0.7 : 1,
                  }}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default squareMiddle;
