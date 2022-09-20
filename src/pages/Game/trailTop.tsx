import { useApi } from '../../services/api';

interface PropTypes {
  initial: number;
}

interface PlayersTypes {
  id: string;
  name: string;
  turn: boolean | null;
  color: string;
  pieces: PiecesTypes[];
}

interface PiecesTypes {
  id: number;
  position: number | null;
  src: string;
  finish: boolean;
}

interface RoomTypes {
  id: string;
  turnsPlayer: PlayersTypes;
  turn: number | null;
  dice: number | null;
  diced: boolean;
  players: PlayersTypes[];
}

export const TrailTop = ({ initial }: PropTypes) => {
  const { room } = useApi();

  function getPieces() {}

  let cont = initial;
  function createTrail() {
    const newTrail = [];
    for (cont; cont < initial + 13; cont++) {
      newTrail.push({ id: cont, pieces: getPieces() });
    }
  }
  return <div></div>;
};
