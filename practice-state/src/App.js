// import { Component } from 'react';

// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: props.counter
//     };
//   }

//   isIncrease = () => {
//     if (this.state.counter < 10) {
//       this.setState((state) => ({
//         counter: state.counter + 1
//       }));
//     }
//   };

//   isDecrease = () => {
//     if (this.state.counter > -10) {
//       this.setState((state) => ({
//         counter: state.counter - 1
//       }));
//     }
//   };

//   isRondom = () => {
//     this.setState(() => ({
//       counter: +(Math.random() * (10 - -10) + -10).toFixed(0)
//     }));
//   };

//   isReset = () => {
//     this.setState(() => ({
//       counter: this.props.counter
//     }));
//   };

//   render() {

//     return (
//       <div className='app'>
//         <div className='counter'>{this.state.counter}</div>
//         <div className='controls'>
//           <button onClick={this.isIncrease}>INC</button>
//           <button onClick={this.isDecrease}>DEC</button>
//           <button onClick={this.isRondom}>RND</button>
//           <button onClick={this.isReset}>RESET</button>
//         </div>
//       </div>
//     );
    
//   }
// }

// export default App;

import { useState } from 'react';

import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  const isIncrease = () => {
    if (counter < 10) {
      setCounter((counter) => counter + 1);
    }
  };

  const isDecrease = () => {
    if (counter > -10) {
      setCounter((counter) => counter - 1);
    }
  };

  const isRondom = () => {
    setCounter(() => +(Math.random() * (10 - -10) + -10).toFixed(0));
  };

  const isReset = () => {
    setCounter((counter) => counter = 0);
  };

  return (
    <div className='app'>
      <div className='counter'>{counter}</div>
      <div className='controls'>
        <button onClick={isIncrease}>INC</button>
        <button onClick={isDecrease}>DEC</button>
        <button onClick={isRondom}>RND</button>
        <button onClick={isReset}>RESET</button>
      </div>
    </div>
  );
}

export default App;
