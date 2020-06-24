import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Full from './containers/Full/Full';

const AppRouter = (props) => (
  <BrowserRouter>
    <Full {...props}/>
  </BrowserRouter>
);

export default AppRouter;
