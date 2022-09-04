const express = require('express');
const app = express();
const server = require('http').Server(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server })
const dotenv = require('dotenv');
const { CLIENT_RENEG_LIMIT } = require('tls');
dotenv.config();
const { v4 } = require('uuid');
const port = process.env.PORT || 3400;

app.use(express.urlencoded({ extended: true }));

const clients = {};
const rooms = {};
const users = {};

wss.on('connection', function connection(ws) {
  //const connection = request.accept(null, request.origin);

  ws.on('open', () => console.log('opened!'));
  ws.on('message', message => {
    const result = JSON.parse(message);

    if (result.method === "create") {
      const clientId = result.clientId;
      const roomId = v4();
      rooms[roomId] = {
        "id": roomId,
        users: [result.player],
        game: result.game
      }
      console.log(result.game);

      const payload = {
        'method': 'create',
        'room': rooms[roomId]
      }

      const con = clients[clientId].connection;
      console.log(Object.values(rooms));
      con.send(JSON.stringify(payload));
    }

    if (result.method === "join") {
      const searchRoom = Object.values(rooms);
      let roomId;
      searchRoom.forEach((room, i) => {
        console.log(`Room ${i}: `, room, room.users);
        if (room.users.length < 4) {
          console.log("This room has room");
          roomId = room.id;
          room.users.push(result.player);
          console.log(`Room ${i}: `, room);
        }
      });

      const payload = {
        'method': 'join',
        'room': rooms[roomId]
      }

      const con = clients[clientId].connection;
      con.send(JSON.stringify(payload));
    }
  });

  const clientId = v4();
    clients[clientId] = {
      'connection': ws
    };

    const payload = {
      'method': 'connect',
      'clientId': clientId
    }

    ws.send(JSON.stringify(payload));

});

/* wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      const room = JSON.parse(data).roomName;
      if (!client.room) {
        client.room = room;
      }
      if (client !== ws && client.readyState === WebSocket.OPEN && client.room === room) {
        client.send(data);
      }
    });
  });
}); */

/* app.use((req, res) => {
  res.status(200).send({
    mensagem: 'Ok, deu certo'
  });
}); */

server.listen(port, () => console.log(`Server listening on port ${port}`));