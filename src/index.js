import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: "Now you now", likesCount: 12},
    {id: 2, message: "person", likesCount: 125},
    {id: 3, message: "nonstop", likesCount: 777},
];

let dialogs = [
    {id: 1, name: "joker"},
    {id: 2, name: "venom"},
    {id: 3, name: "homer"},
];

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "hello"},
    {id: 3, message: "droppy"},
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
