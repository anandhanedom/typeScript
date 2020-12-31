import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Parent, Child } from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Parent>
    <Child />
  </Parent>,
  rootElement
);
