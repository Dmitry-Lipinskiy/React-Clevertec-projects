import React from 'react';
import './App.css';

const Header = () => {
  return <h1>Hello world!!!</h1>
};

// const Field = () => {
//   const holder = 'Type here';
//   const fieldStyle = {
//     width: '300px'
//   };
//   return <input placeholder={holder} type='text' style={fieldStyle} />;

//   // return <input placeholder='Type here' type='text' />
// };

class Field extends React.Component {
  render() {
    const holder = 'Type here';
    const fieldStyle = {
      width: '300px'
    };
    return <input placeholder={holder} type='text' style={fieldStyle} />;
  }
}

function Btn() {
  const text = 'Log in';
  return <button>{text}</button>;

  // const res = () => {
  //   return 'Log in';
  // };
  // return <button>{res()}</button>;

  // const span = <span>Log in</span>
  // return <button>{span}</button>;

  // TODO: проверка
  // const text = 'Log in';
  // const logged = true;
  // return <button>{logged ? 'Enter' : text}</button>;

  // if правильно:
  // if(logged) {
  //   return 'Enter';
  // }
  // return <button>{text}</button>;

  // if не правильно
  // return <button>{
  //   if(logged) {
  //     return 'Enter';
  //   }
  // }</button>;

}

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <React.StrictMode>
        <Header />
      </React.StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
