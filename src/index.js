import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import {observe} from './Game';
import registerServiceWorker from './registerServiceWorker';

observe(knightPosition => ReactDOM.render(
    <Board knightPosition = {knightPosition}/>, document.getElementById('root'))
);
registerServiceWorker();
