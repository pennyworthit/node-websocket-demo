import * as ws from 'ws';

const webSocketServer = new ws.Server({
  port: 30002,
});

webSocketServer.on('listening', (socket: ws) => {
  console.log('web socket begins listening');
});

webSocketServer.on('connection', (socket: ws, req) => {

  socket.on('message', (data) => {
    console.log(data);
    if (data === 'terminate') {
      socket.close();
      setTimeout(() => {
        webSocketServer.close();
      }, 3000);
    }
  });

  socket.on('close', (code, reason) => {
    console.log(code);
    console.log(reason);
  });

  socket.on('error', (error: Error) => {
    console.log('error:');
    console.log(error);
  });

  const ip = req.connection.remoteAddress;
  console.log(ip + ' is connected');
  socket.send('hi');
});