import React from 'react';
import ReactDOM from 'react-dom'; //importando a DOM - Arvore de elementos
import App from './App';

//renderizando o App dentro da div com id root
ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));

