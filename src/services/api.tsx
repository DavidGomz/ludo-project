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
  hasDiced: boolean;
  connect: () => void;
  init: (name: string) => void;
  dice: (numDado: number) => void;
  sumPiecePosition: (piece: PiecesTypes) => void;
  passTurn: () => void;
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
      if (room.players.filter((player) => player.isBot === true)) {
        room.players
          .filter((player) => player.isBot === true)
          .forEach((disconnectedPlayer) =>
            console.log(`${disconnectedPlayer.name} desconectou da sala.`),
          );
      }

      if (room.turn !== null) {
        room.turnsPlayer = room.players[room.turn % 4];

        if (room.dice) {
          console.log(`${room.turnsPlayer.name} tirou ${room.dice} no dado!`);

          if (room.turnsPlayer.isBot) {
            autoMove();
          } else {
            playOrPass();
          }
        }

        if (!room.diced) {
          console.log('vai iniciar um turno');
          turn();
        }
      }
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
  }

  function moveSinglePiece() {
    if (!room) return;
    console.log('auto moving single piece');
    const sum = room.turnsPlayer.pieces.find(
      (piece) => piece.position !== null,
    );
    if (sum) {
      sumPiecePosition(sum);
    }
    // msg.room.turnsPlayer.pieces.find(piece => piece.position !== null).position += msg.room.dice;
  }

  function move() {
    if (!room) return;
    if (room.turnsPlayer.id === playerID) {
      console.log('clique em uma de suas peças para movê-la no tabuleiro');
    } else {
      console.log(`${room.turnsPlayer.name} está tomando sua ação!`);
    }
  }

  // FIXME
  // function moving(e: any) {
  //   if (!room) return;
  //   if (e.target.matches(`[data-playerid="${room.turnsPlayer.id}"]`)) {
  //     let pieceData = e.target.attributes.id.value.split('-');
  //     let piece = room.turnsPlayer.pieces.find(
  //       (piece) => piece.id == pieceData[1],
  //     );

  //     if (piece?.position !== null || room.dice == 6) {
  //       sumPiecePosition(piece);
  //       console.log('finalizando turno');
  //       passTurn();
  //     } else if (piece.position === null) {
  //       console.log(
  //         'ce num tirou 6 véi, então clica numa pc q ja tá em jogo parça',
  //       );
  //     }
  //   } else {
  //     console.log('Clique nas suas peças!');
  //   }
  // }

  function playOrPass() {
    if (!room) return;
    if (hasPiecesOnBoard(room.turnsPlayer)) {
      if (
        playerPiecesOnBoard(room.turnsPlayer).length == 1 &&
        room.dice !== 6
      ) {
        moveSinglePiece();

        console.log(
          `${room.turnsPlayer.name} tem apenas uma peça em jogo, ela foi movida automaticamente e a vez será passada`,
        );

        passTurn();
      } else if (
        playerPiecesOnBoard(room.turnsPlayer).length == 1 &&
        room.dice === 6
      ) {
        move();
      } else {
        move();
      }
    } else if (!hasPiecesOnBoard(room.turnsPlayer) && room.dice == 6) {
      move();
    } else {
      console.log(
        `${room.turnsPlayer.name} não tem peças no tabuleiro e não tirou 6 no dado, a vez será passada`,
      );
      passTurn();
    }
  }

  function turn() {
    if (!room || room.turn === null) return;

    if (player === room.turnsPlayer) {
      console.log(room.turnsPlayer.name + ', Eh sua vez de jogar o dado!');
    } else {
      console.log('É a vez de: ' + room.turnsPlayer.name);
    }
  }

  function passTurn() {
    if (!room || room.turn === null || !ws) return;
    if (room.turnsPlayer.id === playerID) {
      room.turn++;

      let msgEndedTurn = {
        type: 'endedTurn',
        player: player,
        room: room,
      };

      ws.send(JSON.stringify(msgEndedTurn));
    }
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

    move();
  }
  // FIXME
  function dice(numDado: number) {
    if (!ws) return;
    console.log('numDado ' + numDado);

    let msgDado = {
      type: 'dado',
      numDado: numDado,
    };

    ws.send(JSON.stringify(msgDado));
  }

  function isWhoIsGoingToPlayForBot() {
    console.log('isWhoIsGoingToPlayForBot');
    if (!room || room.turn === null || !room.players || !playerID) return false;
    const playerTurn = room.players.find((playerr) => playerr.id === playerID);
    if (!playerTurn) return;
    if (++room.turn % 4 == room.players.indexOf(playerTurn)) {
      --room.turn;
      return true;
    } else {
      --room.turn;
      return false;
    }
  }

  function hasPiecesOnBoard(player: PlayersTypes) {
    return player.pieces.find((piece) => piece.position !== null)
      ? true
      : false;
  }

  function playerPiecesOnBoard(player: PlayersTypes) {
    return player.pieces.filter((piece) => piece.position !== null);
  }

  function reuneAllPieces() {
    let allPieces: PiecesTypes[] = [];
    room?.players.forEach((player) => {
      player.pieces.forEach((piece) => {
        allPieces.push(piece);
      });
    });
    return allPieces;
  }

  function isPieceInProtectedCell(
    protectedCells: number[],
    piece: PiecesTypes,
  ) {
    let result = false;
    protectedCells.forEach((cell) => {
      if (piece.position == cell) {
        result = true;
      }
    });
    return result;
  }

  function hasPieceWithPositionConflict(pieceInMoving: PiecesTypes) {
    return reuneAllPieces().find(
      (piece) =>
        piece.position === pieceInMoving.position &&
        piece.playerID !== pieceInMoving.playerID &&
        !isPieceInProtectedCell([1, 8, 13, 20, 25, 32, 37], pieceInMoving),
    )
      ? true
      : false;
  }

  function pieceWithPositionConflict(pieceInMoving: PiecesTypes) {
    return reuneAllPieces().find(
      (piece) =>
        piece.position === pieceInMoving.position &&
        piece.playerID !== pieceInMoving.playerID &&
        !isPieceInProtectedCell([4, 12, 17, 25, 30, 38, 43, 51], pieceInMoving),
    );
  }

  function killAnotherPiece(pieceInMoving: PiecesTypes) {
    if (hasPieceWithPositionConflict(pieceInMoving)) {
      console.log('Tem peça pra matar');
      const killedPiece = pieceWithPositionConflict(pieceInMoving);
      if (!killedPiece || !room) return;
      killedPiece.final = false;
      killedPiece.canEntryFinal = false;
      killedPiece.position = null;
      room.killed = true;
    } else {
      return;
    }
  }

  function movePieceCorrectly(piece: PiecesTypes) {
    if (!room || !piece.position || !room.dice) return;
    switch (room.players.indexOf(room.turnsPlayer)) {
      case 0:
        piece.position += room.dice;
        killAnotherPiece(piece);
        if (piece.position > 51 && !piece.final) {
          piece.position = 100 + (piece.position - 51);
          piece.final = true;
        }
        if (piece.position > 105)
          console.log(
            `ACABOOOU O JOOOOGO!!! ${room.turnsPlayer.name} VENCEEEEEU!!!`,
          );

        break;

      case 1:
        piece.position += room.dice;
        killAnotherPiece(piece);
        if (piece.position > 11 && piece.canEntryFinal) {
          piece.position = 105 + (piece.position - 11);
          piece.final = true;
        }
        if (piece.position > 110)
          console.log(
            `ACABOOOU O JOOOOGO!!! ${room.turnsPlayer.name} VENCEEEEEU!!!`,
          );
        break;

      case 2:
        piece.position += room.dice;
        killAnotherPiece(piece);
        if (piece.position > 23 && piece.canEntryFinal) {
          piece.position = 110 + (piece.position - 23);
          piece.final = true;
        }
        if (piece.position > 115)
          console.log(
            `ACABOOOU O JOOOOGO!!! ${room.turnsPlayer.name} VENCEEEEEU!!!`,
          );
        break;

      case 3:
        piece.position += room.dice;
        killAnotherPiece(piece);
        if (piece.position > 35 && piece.canEntryFinal) {
          piece.position = 115 + (piece.position - 35);
          piece.final = true;
        }
        if (piece.position > 120)
          console.log(
            `ACABOOOU O JOOOOGO!!! ${room.turnsPlayer.name} VENCEEEEEU!!!`,
          );
        break;
    }
  }
  //FIXME  Posição inicial errada
  function sumPiecePosition(piece: PiecesTypes) {
    if (!room || !room.dice) return;
    if (!hasPiecesOnBoard(room.turnsPlayer)) {
      console.log(piece, 'Entrei sumPosition if');
      if (room.turnsPlayer === room.players[0]) {
        piece.position = piece.position + 4 + room.dice;
      } else if (room.turnsPlayer === room.players[1]) {
        piece.position = piece.position + 17 + room.dice;
      } else if (room.turnsPlayer === room.players[2]) {
        piece.position = piece.position + 30 + room.dice;
      } else if (room.turnsPlayer === room.players[3]) {
        piece.position = piece.position + 43 + room.dice;
      }
    } else if (piece.position === null) {
      console.log(piece, 'Entrei sumPosition null');

      if (room.turnsPlayer === room.players[0]) {
        // console.log('player0', piece.position + 5 + room.dice);
        piece.position = piece.position + 5 + room.dice;
      } else if (room.turnsPlayer === room.players[1]) {
        piece.position = piece.position + 7 + room.dice;
      } else if (room.turnsPlayer === room.players[2]) {
        piece.position = piece.position + 19 + room.dice;
      } else if (room.turnsPlayer === room.players[3]) {
        piece.position = piece.position + 31 + room.dice;
      }
    } else {
      movePieceCorrectly(piece);
    }

    if (piece.position > 52 && !piece.final) {
      piece.position = piece.position - 52;
      piece.canEntryFinal = true;
    }
  }

  function passTurnForBot() {
    if (!room || !ws || room.turn === null) return;
    if (isWhoIsGoingToPlayForBot()) {
      room.turn++;

      console.log('sala rifhtbefore sending: ', room);
      let msgEndedTurn = {
        type: 'endedTurn',
        room: room,
      };

      ws.send(JSON.stringify(msgEndedTurn));
    } else {
      console.log(
        `não sou o jogador da vez, esperando ${room.turnsPlayer.name} enviar o fim do turno`,
      );
    }
  }

  function autoMove() {
    if (!room) return;
    if (isWhoIsGoingToPlayForBot()) {
      console.log('vou jogar pelo bot');

      if (!room.diced) {
        console.log('jogando dado pelo bot');

        dice(Math.floor(Math.random() * 6 + 1));
      } else {
        console.log('movimentar a peça do bot');

        if (hasPiecesOnBoard(room.turnsPlayer)) {
          if (
            playerPiecesOnBoard(room.turnsPlayer).length == 1 &&
            room.dice !== 6
          ) {
            // room.turnsPlayer.pieces.reduce(function(prev, current) {
            //     return (prev.position > current.position) ? prev : current
            // }).position += room.dice;
            // FIXME
            sumPiecePosition(
              room.turnsPlayer.pieces.reduce(function (prev, current) {
                return prev.position &&
                  current.position &&
                  prev.position < current.position
                  ? current
                  : prev;
              }),
            );

            console.log(
              `${room.turnsPlayer.name} tem apenas uma peça em jogo, ela foi movida automaticamente e a vez será passada`,
            );

            passTurnForBot();
          } else if (
            playerPiecesOnBoard(room.turnsPlayer).length == 1 &&
            room.dice === 6
          ) {
            // room.turnsPlayer.pieces.find(piece => piece.position === null).position += room.dice;
            const selectPiece = room.turnsPlayer.pieces.find(
              (piece) => piece.position === null,
            );
            if (selectPiece) {
              sumPiecePosition(selectPiece);
              passTurnForBot();
            }
          } else {
            console.log(
              'bot tem mais de uma peça no tabuleiro e nao tirou 6, decidir com qual movimentar',
            );

            // room.turnsPlayer.pieces.reduce(function(prev, current) {
            //     return (prev.position > current.position) ? prev : current
            // }).position += room.dice;

            sumPiecePosition(
              room.turnsPlayer.pieces.reduce(function (prev, current) {
                return prev.position &&
                  current.position &&
                  prev.position > current.position
                  ? prev
                  : current;
              }),
            );

            passTurnForBot();
          }
        } else if (!hasPiecesOnBoard(room.turnsPlayer) && room.dice == 6) {
          console.log(
            'bot sem peças no tabuleiro mas tirou 6 no dado, fazer a lógica de tirar alguma peça da casinha',
          );

          // room.turnsPlayer.pieces[0].position += room.dice;

          sumPiecePosition(room.turnsPlayer.pieces[0]);

          passTurnForBot();
        } else {
          console.log(
            `${room.turnsPlayer.name} não tem peças no tabuleiro e não tirou 6 no dado, a vez será passada`,
          );
          passTurnForBot();
        }
      }
    } else {
      console.log('aguardando a jogada do bot');
    }
  }

  return (
    <GameContext.Provider
      value={{
        playerID,
        player,
        room,
        hasDiced,
        connect,
        init,
        dice,
        sumPiecePosition,
        passTurn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useApi = () => useContext(GameContext);
