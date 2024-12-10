import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter03/Library'
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accomodate from './chapter_07/accomodate';

//React Ver. 18이므로 코드상에 이상이 있을 수 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accomodate />
  </React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
