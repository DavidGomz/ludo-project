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

interface ContextTypes {
  playerID: string;
  player: PlayersTypes;
  room: RoomTypes;
  hasDiced: boolean;
  connect: () => void;
  init: (name: string) => void;
  play: (numDado: number) => void;
}

interface PropTypes {
  children: ReactNode;
}

const GameContext = createContext<Partial<ContextTypes>>({});

export const ApiContext = ({ children }: PropTypes) => {
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState<string>('');
  const [player, setPlayer] = useState<PlayersTypes>();
  const [room, setRoom] = useState<RoomTypes>();
  const [ws, setWs] = useState(new WebSocket('ws://localhost:9999'));
  const [hasDiced, setHasDiced] = useState(false);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    if (room) {
      setPlayer(room.players.find((player) => player.id === playerID));

      if (room.turn !== null) turn();
      //Chat
      if (room.dice)
        console.log(`${room.turnsPlayer.name} tirou ${room.dice} no dado!`);
      console.log(room);
    }
  }, [room]);

  async function connect() {
    if (ws) {
      ws.onopen = () => {
        console.log('connecteeeedd');
      };

      ws.onmessage = (event: MessageEvent<any>) => {
        let msg = JSON.parse(event.data);

        switch (msg.type) {
          case 'identifier':
            setPlayerID(msg.playerID);

            break;

          case 'room':
            setRoom(msg.room);
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
        }
      };
    }
  }

  function init(name: string) {
    let msgInit = {
      type: 'initPlayer',
      playerName: name,
      playerID: playerID,
    };
    ws?.send(JSON.stringify(msgInit));
    navigate('game');
    // name.value = '';
    // initBtn.disabled = true;
    // diceBtn.style.display = 'flex';
    // name.style.display = 'none';
    // initBtn.style.display = 'none';
  }

  function turn() {
    if (!room || !room.turn) return;
    const newRoom = room;
    newRoom.turnsPlayer = room.players[room.turn % 4];

    if (player === room.turnsPlayer) {
      console.log(room.turnsPlayer.name + ', Eh sua vez de jogar o dado!');
    } else {
      console.log('É a vez de: ' + room.turnsPlayer.name);
    }
    // ableDisableDiceBtn();
  }

  function passTurn() {
    if (!room || !room.turn || !ws) return;
    room.turn++;
    // document.body.removeEventListener('click', moving);
    // hasDiced = false;

    let msgEndedTurn = {
      type: 'endedTurn',
      player: player,
      room: room,
    };

    ws.send(JSON.stringify(msgEndedTurn));
  }

  function play(numDado: number) {
    if (!ws) return;
    numDado = Math.floor(Math.random() * 3 + 1);
    setHasDiced(true);

    let msgDado = {
      type: 'dado',
      numDado: numDado,
      player: player,
    };

    ws.send(JSON.stringify(msgDado));

    // move();
  }

  // // Retirar
  // function renderAll() {
  //   document.getElementById('casinhas').innerHTML = '';
  //   document.getElementById('table').innerHTML = '';

  //   for (let i = 1; i < 30; i++) {
  //     let cell = document.createElement('div');
  //     cell.setAttribute('class', 'divs');
  //     cell.setAttribute('id', `casa${i}`);
  //     document.getElementById('table').appendChild(cell);
  //   }

  //   room.players.forEach((player) => {
  //     let playerConteiner = document.createElement('div');
  //     playerConteiner.setAttribute('class', 'playerConteiner');
  //     playerConteiner.setAttribute('id', `${player.name}Conteiner`);
  //     document.getElementById('casinhas').appendChild(playerConteiner);
  //     let playerNameP = document.createElement('p');
  //     playerNameP.innerHTML = player.name;
  //     playerConteiner.appendChild(playerNameP);

  //     player.pieces.forEach((piece) => {
  //       let playerPiece = document.createElement('div');
  //       playerPiece.setAttribute('class', 'piece');
  //       playerPiece.setAttribute('id', `${player.name}-${piece.id}`);
  //       playerPiece.innerHTML = playerPiece.getAttribute('id');

  //       playerPiece.setAttribute('data-playerid', `${player.id}`);

  //       if (piece.position !== null) {
  //         document
  //           .getElementById(`casa${piece.position}`)
  //           .appendChild(playerPiece);
  //       } else {
  //         document
  //           .getElementById(`${player.name}Conteiner`)
  //           .appendChild(playerPiece);
  //       }
  //     });
  //   });
  // }
  // // END
  // // Retirar
  // function ableDisableDiceBtn() {
  //   if (player === room.turnsPlayer && !hasDiced) {
  //     diceBtn.disabled = false;
  //   } else {
  //     diceBtn.disabled = true;
  //   }
  // }
  // //END
  // // Retirar
  // function move() {
  //   document.body.addEventListener('click', moving);
  // }
  // // END
  // // Retirar
  // function moving(e) {
  //   if (e.target.matches(`[data-playerid="${room.turnsPlayer.id}"]`)) {
  //     let pieceData = e.target.attributes.id.value.split('-');
  //     let piece = room.turnsPlayer.pieces.find(
  //       (piece) => piece.id == pieceData[1],
  //     );

  //     piece.position += numDado;

  //     renderAll();

  //     e.target.remove();

  //     console.log('finalizando turno');
  //     passTurn();
  //   } else {
  //     console.log('Clique nas suas peças!');
  //   }
  // }
  // // END

  return (
    <GameContext.Provider
      value={{ playerID, player, room, hasDiced, connect, init, play }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useApi = () => useContext(GameContext);
