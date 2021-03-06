import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import * as serviceWorker from './serviceWorker';

// let connectOptions = {
//   // "force new connection" : true,
//   // "secure" : true,
//   "reconnection": true,
//   "reconnectionDelay": 1000,
//   "reconnectionDelayMax" : 2000,
//   "reconnectionAttempts": 99999,
//   "autoConnect" : true,
//   "timeout": 10000,
//   // "transports": ["websocket"],
//   // "query" : {user_id : user_id, accessToken : getAccessToken()}
// };
// const webSocketURL = "http://34.73.59.87"

const socket = io.connect('https://error-logger-backend.herokuapp.com');

socket.on('message', msg => console.log(msg));

let onevent = socket.onevent;

socket.onevent = function (packet) {
  let args = packet.data || [];
  onevent.call(this, packet);             // original call
  packet.data = ["*"].concat(args);
  onevent.call(this, packet);             // additional call to catch-all
};

socket.on("*", function (event, data) {
  console.log("SOCKET : ", event, "on", data);
});

socket.on('connect', data => {console.log('Socket Connected')});

socket.on('reconnect_attempt', (attemptNumber) => {
  console.log('AttemptNumber', attemptNumber)
});

ReactDOM.render(<SocketProvider socket={socket}>
   <App />
  </SocketProvider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
