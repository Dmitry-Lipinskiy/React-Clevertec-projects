import { Component } from 'react';

import { AppHeader } from '../appHeader';
import { RandomChar } from '../randomChar';
import { CharList } from '../charList';
import { CharInfo } from '../charInfo';
import { ErrorBoundary } from '../errorBoundary';

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
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className='char__content'>
          <ErrorBoundary>
            <CharList 
              onCharSelected={this.onCharSelected}
            />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={this.state.selectedChar} />
          </ErrorBoundary>
        </div>
        <img className='bg-decoration' src={decoration} alt='vision' />
      </main>
    </div>
  );
};
