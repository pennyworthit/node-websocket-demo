import * as ws from 'ws';

const webSocketClient = new ws('ws://127.0.0.1:30002');

webSocketClient.on('open', () => {
  console.log('web socket opened');
});

webSocketClient.on('message', (data) => {
  console.log(data);

  setTimeout(() => {
    webSocketClient.send('terminate');
  }, 5000);
});

webSocketClient.on('error', (error: Error) => {
  console.log(error);
});

webSocketClient.on('close', () => {
  console.log('???');
});

webSocketClient.on('ping', (data) => {
  console.log('ping' + data);
});

webSocketClient.on('pong', (data) => {
  console.log('pong' + data);
});