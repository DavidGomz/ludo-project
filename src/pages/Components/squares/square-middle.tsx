interface Props {
  id?: number;
  color: string;
  playerId?: number;
  pieces?: PiecesTypes[];
}

interface PiecesTypes {
  playerId: number;
  src: string;
}

const squareMiddle = ({ color, pieces, playerId, id }: Props) => {
  return (
    <div
      className={`w-[16.667%] h-[33.33%] float-left border-[#202020] border bg-[${color}]`}
    >
      <div className="relative w-full h-full flex">
        {pieces?.length !== 0
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
