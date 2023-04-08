import { useState } from 'react';

import { AppHeader } from '../appHeader';
import { RandomChar } from '../randomChar';
import { CharList } from '../charList';
import { CharInfo } from '../charInfo';

import decoration from '../../resources/img/vision.png';

export const App = () => {

  const [selectedChar, setSelectedChar] = useState(null);
  
  const onCharSelected = (id) => {
    setSelectedChar(id);
      
  };

  return (
    <div className='app'>
      <AppHeader />
      <main>
        <RandomChar />
        <div className='char__content'>
          <CharList onCharSelected={onCharSelected} />
          <CharInfo charId={selectedChar} />
        </div>
        <img className='bg-decoration' src={decoration} alt='vision' />
      </main>
    </div>
  );
};