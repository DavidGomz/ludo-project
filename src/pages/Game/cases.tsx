import Mario from '../../assets/images/Mario.svg';
import Wario from '../../assets/images/wario.svg';
import Luigi from '../../assets/images/Luigi.svg';
import Waluigi from '../../assets/images/waluigi.svg';
import { useApi } from '../../services/api';

interface PlayersTypes {
  id: string;
  name: string;
  turn: number | null;
  color: string;
  pieces: PiecesTypes[];
}

interface PiecesTypes {
  id: number;
  playerID: string;
  position: number | null;
  src: string;
  final: boolean;
  canEntryFinal: boolean;
}

interface PropTypes {
  player: PlayersTypes;
  playerIndex: number;
}

export const Cases = ({ player, playerIndex }: PropTypes) => {
  const { playerID, sumPiecePosition, passTurn } = useApi();

  function getImage() {
    if (playerIndex === 0) return Mario;
    if (playerIndex === 1) return Waluigi;
    if (playerIndex === 2) return Wario;
    return Luigi;
  }

  function createCases() {
    const cases = [];
    for (let i = 0; i < 4; i++) {
      cases.push(
        <div
          key={i}
          className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex"
        ></div>,
      );
    }
    return cases;
  }

  return (
    <div className="w-[70%] h-[70%] bg-white">
      {player
        ? player.pieces.map((piece, index) => (
            <div
              key={index}
              className="w-[35%] h-[35%] m-[7.5%] float-left bg-[#D9D9D9] rounded-full justify-center items-center flex"
            >
              {!piece.position ? (
                <img
                  src={getImage()}
                  className="h-4/5"
                  onClick={() => {
                    if (
                      player.id === playerID &&
                      sumPiecePosition &&
                      passTurn
                    ) {
                      sumPiecePosition(piece);
                      passTurn();
                    }
                  }}
                />
              ) : null}
            </div>
          ))
        : createCases()}
    </div>
  );
};
