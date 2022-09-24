import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayersTypes {
  id: string;
  name: string;
  turn: number | null;
  color: string;
  pieces: PiecesTypes[];
  isBot: boolean;
}

interface PiecesTypes {
  id: number;
  playerID: string;
  position: number | null;
  src: string;
  final: boolean;
  canEntryFinal: boolean;
}

interface RoomTypes {
  id: string;
  turnsPlayer: PlayersTypes;
  turn: number | null;
  dice: number | null;
  diced: boolean;
  killed: boolean;
  players: PlayersTypes[];
}

interface ContextTypes {
  playerID: string;
  player: PlayersTypes;
  room: RoomTypes;
  diceDiced: number | null;
  connect: () => void;
  init: (name: string) => void;
  dice: () => void;
  moving: (piece: PiecesTypes) => void;
  characters: number[] | null;
  selectPerson: (index: number) => void;
}

interface PropTypes {
  children: ReactNode;
}

const GameContext = createContext<Partial<ContextTypes>>({});

export const ApiContext = ({ children }: PropTypes) => {
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState<string>('');
  const [player, setPlayer] = useState<PlayersTypes>();
  const [characters, setCharacters] = useState<number[] | null>(null);
  const [room, setRoom] = useState<RoomTypes>();
  const [ws, setWs] = useState(new WebSocket('ws://localhost:9999'));
  const [diceDiced, setDiceDiced] = useState<number | null>(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    if (room) {
      if (room.turn !== null) {
        turn();
      }
    }
  }, [room]);

  async function connect() {
    if (ws) {
      ws.onopen = () => {
        console.log('connecteeeedd');
      };

      ws.onclose = () => {
        console.log(`${player?.name} Closssssssssssssed`);
      };

      ws.onmessage = (event: MessageEvent<any>) => {
        let msg = JSON.parse(event.data);

        switch (msg.type) {
          case 'identifier':
            setPlayerID(msg.playerID);

            break;

          case 'roomUpdate':
            setRoom(msg.room);

            navigate('/game');
            break;

          case 'updateRoomRequest':
            let requestRoomUpdate;
            ws.send(
              JSON.stringify(
                (requestRoomUpdate = {
                  type: 'sendUpdatedRoom',
                  playerID: playerID,
                }),
              ),
            );
            break;
          case 'makeAMove':
            if (msg.dice !== null) {
              setDiceDiced(msg.dice);
              console.log('Dado', msg.dice);
            }

            break;

          case 'updateMsg':
            console.log(msg.updateMsg);

            break;
          case 'selectAPiece':
            console.log(`Selecione uma das peças: `, msg.pieces);
            setCharacters(msg.pieces);
            navigate('/characters');

            break;
        }
      };
    }
  }

  function init(name: string) {
    let msgInit = {
      type: 'setName',
      playerName: name,
      playerID: playerID,
    };
    ws?.send(JSON.stringify(msgInit));
  }

  function selectPerson(index: number) {
    ws.send(
      JSON.stringify({
        type: 'selectedPiece',
        position: index,
      }),
    );
  }

  function turn() {
    if (!room || room.turn === null) return;
    setDiceDiced(null);
    if (player === room.turnsPlayer) {
      console.log(room.turnsPlayer.name + ', Eh sua vez de jogar o dado!');
    } else {
      console.log('É a vez de: ' + room.turnsPlayer.name);
    }
  }

  function dice() {
    if (!ws) return;

    let msgDado = {
      type: 'dado',
    };

    ws.send(JSON.stringify(msgDado));
  }

  function moving(piece: PiecesTypes) {
    if (piece.position !== null || diceDiced == 6) {
      ws.send(
        JSON.stringify({
          type: 'move',
          piece: piece,
        }),
      );
    } else if (piece.position === null) {
      console.log(
        'ce num tirou 6 véi, então clica numa pc q ja tá em jogo parça',
      );
    }
  }

  return (
    <GameContext.Provider
      value={{
        playerID,
        player,
        room,
        connect,
        init,
        dice,
        diceDiced,
        moving,
        characters,
        selectPerson,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useApi = () => useContext(GameContext);
