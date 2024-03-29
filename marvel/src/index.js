import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app';
import { ErrorBoundary } from './components/errorBoundary';
// import { MarvelService } from './services/marvelService';

import './style/style.scss';

// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then((res) => console.log(res));
// marvelService.getCharacter(1011027).then((res) => console.log(res));

// marvelService
//   .getAllCharacters()
//   .then((res) => res.data.results.forEach((item) => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  // </React.StrictMode>
);
