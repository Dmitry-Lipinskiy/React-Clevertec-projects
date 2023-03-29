import { Component } from 'react';

import { AppHeader } from '../appHeader';
import { RandomChar } from '../randomChar';
import { CharList } from '../charList';
import { CharInfo } from '../charInfo';

import decoration from '../../resources/img/vision.png';

export class App extends Component {

  state = {
    selectedChar: null
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    });
  };

  render = () => (
    <div className='app'>
      <AppHeader />
      <main>
        <RandomChar />
        <div className='char__content'>
          <CharList onCharSelected={this.onCharSelected} />
          <CharInfo charId={this.state.selectedChar} />
        </div>
        <img className='bg-decoration' src={decoration} alt='vision' />
      </main>
    </div>
  );
};
