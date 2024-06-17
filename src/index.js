import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client'; //함수를 가져올 때는 {} 안에 함수 이름을 적어서 import 해야한다.
import AppRouter from './AppRouter';

const container = document.getElementById('root');


const root = createRoot(container);
root.render(
  <AppRouter tab = "home" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
