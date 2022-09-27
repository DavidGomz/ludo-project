import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayersTypes {
  id: string;
  name: string;
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
  killed: boolean;
  players: PlayersTypes[];
}

interface ContextTypes {
  playerID: string;
  room: RoomTypes;
  diceNumber?: number;
  connect: () => void;
  init: (name: string) => void;
  dice: () => void;
  moving: (piece: PiecesTypes) => void;
  characters: number[] | null;
  selectPerson: (index: number) => void;
  chat: ChatTypes[];
  playerIndex: number | null;
  message?: string;
  sendChatMessage: (content: string) => void;
  canDice: boolean;
  playAgain: (confirm: boolean) => void;
  winner: WinnerProps;
}

interface ChatTypes {
  playerName?: string;
  content: string;
  index?: 0 | 1 | 2 | 3;
}

interface WinnerProps {
  winnerName: string;
  winnerIndex: number;
}

interface PropTypes {
  children: ReactNode;
}

const GameContext = createContext<Partial<ContextTypes>>({});

export const ApiContext = ({ children }: PropTypes) => {
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState<string>('');
  const [playerIndex, setPlayerIndex] = useState<number | null>(null);
  const [characters, setCharacters] = useState<number[] | null>(null);
  const [room, setRoom] = useState<RoomTypes>();
  const [ws, setWs] = useState(new WebSocket('ws://localhost:9999'));
  const [diceNumber, setDiceNumber] = useState<number>();
  const [chat, setChat] = useState<ChatTypes[]>([]);
  const [message, setMessage] = useState<string>();
  const [canDice, setCanDice] = useState(false);
  const [winner, setWinner] = useState<WinnerProps>();

  useEffect(() => {
    connect();
  }, [playerID]);

  useEffect(() => {
    if (room) {
      if (room.turn !== null) {
        turn();
      }
    }
  }, [room]);

  async function connect() {
    if (ws) {
      ws.onopen = () => {};

      ws.onmessage = (event: MessageEvent<any>) => {
        let msg = JSON.parse(event.data);

        switch (msg.type) {
          case 'identifier':
            setPlayerID(msg.playerID);
            localStorage.setItem('token', msg.token);

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
            setMessage('Escolha uma peça');
            break;

          case 'updateMsg':
            setMessage(msg.msg);
            break;

          case 'selectAPiece':
            setCharacters(msg.pieces);
            navigate('/characters');

            break;

          case 'numDado':
            if (typeof msg.msg === 'number') setDiceNumber(msg.msg);
            else if (typeof msg.msg === 'string' && Number(msg.msg))
              setDiceNumber(Number(msg.msg));
            break;

          case 'verifyConnection':
            let token = localStorage.getItem('token');

            if (token) {
              ws.send(
                JSON.stringify({
                  type: 'reconnection',
                  token: token,
                }),
              );
            } else {
              ws.send(
                JSON.stringify({
                  type: 'initPlayer',
                }),
              );
            }

            break;

          case 'chat':
            setChat(msg.msg);
            break;

          case 'reconnected':
            setPlayerID(msg.playerID);
            setPlayerIndex(msg.index);
            setChat(msg.chat);
            ws.send(JSON.stringify({ type: 'sendUpdatedRoom' }));
            break;

          case 'ableDiceBtn':
            setCanDice(true);
            break;

          case 'finalizingGame':
            setWinner(msg.msg);
            navigate('final');
            break;

          case 'selectAName':
            navigate('/');
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
    setPlayerIndex(index);
  }

  function playAgain(confirm: boolean) {
    ws.send(
      JSON.stringify({
        type: 'playAgain',
        playAgain: confirm,
      }),
    );
  }

  function turn() {
    if (!room || room.turn === null) return;
    setDiceNumber(undefined);
  }

  function dice() {
    if (!ws) return;
    setCanDice(false);
    let msgDado = {
      type: 'dado',
    };

    ws.send(JSON.stringify(msgDado));
  }

  function sendChatMessage(content: string) {
    if (content && content !== '') {
      let msgChat = {
        type: 'chat',
        content: content,
      };
      ws?.send(JSON.stringify(msgChat));
    }
  }

  function moving(piece: PiecesTypes) {
    if (piece.position !== null || diceNumber == 6) {
      ws.send(
        JSON.stringify({
          type: 'move',
          piece: piece,
        }),
      );
    } else if (piece.position === null) {
      setMessage('Você não pode escolher essa peça');
    }
  }

  return (
    <GameContext.Provider
      value={{
        playerID,
        room,
        connect,
        init,
        dice,
        diceNumber,
        moving,
        characters,
        selectPerson,
        chat,
        playerIndex,
        message,
        sendChatMessage,
        canDice,
        playAgain,
        winner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useApi = () => useContext(GameContext);
