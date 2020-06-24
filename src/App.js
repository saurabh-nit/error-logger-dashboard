import { socketConnect } from 'socket.io-react';
import React from 'react';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => (
  <AppRouter {...props}/>
);

export default socketConnect(App);