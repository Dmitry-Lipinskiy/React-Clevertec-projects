import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Header } from './App';
import reportWebVitals from './reportWebVitals';

// 1
//const element = <h1>Hello world!</h1>;

//js-code
//const element = React.createElement('h1', null, 'Hello world!!!');

// или
// const element = React.createElement('h1', {className: 'red'}, 'Hello world...');
// т.е
// const element = {
//   type: 'h1',
//   // cвойства элемента h1
//   props: {
//     className: 'red',
//     children: 'Hello world!'
//   }
// };

// const text = 'Hello world!...';
// const element = (
//   <div>
//     <h1 className='text'>Text: {text}</h1>
//     <h2>Итого: {2 + 2}</h2>
//     <h2>Массив: {['Java', 'Script']}</h2>
//     {/* <h3>Ошибка: { {} }</h3> */}
//     <input type="text" />
//     <button tabIndex='0'>Click</button>
//     {/* <button /> */}
//     <div>
//       <input type="checkbox" name="" id="check1" />
//       <label htmlFor="check1">checkbox</label>
//     </div>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
