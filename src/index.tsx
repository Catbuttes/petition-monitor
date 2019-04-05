import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let elements = document.getElementsByClassName("PetitionMonitorApp")
//let elements = document.getElementsByTagName("app")

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let attribute = element.getAttribute('defaultPetition')
    ReactDOM.render(<App defaultPetition={attribute} />, element);
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
