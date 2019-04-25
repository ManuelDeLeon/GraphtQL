import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main/Main';

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(<Main />, rootElement);
