import React, { useEffect, useRef, useState } from 'react';

import { MarvelService } from '../../services/marvelService/MarvelService';
import { isErrorOrSpinner } from '../../resources/data/is-error-or-spinner';

import './charList.scss';

export const CharList = (props) => {

  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(210);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  
  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError)
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const refs = useRef([]);

  // const setRefs = (el, i) => {
  //   refs.current[i] = (el);
  // };

  const changeStyle = (i) => {
    refs.current.forEach((item) => item.classList.remove('char__item_selected'));
    refs.current[i].classList.add('char__item_selected');
    refs.current[i].focus();
  }

  const charListItems = (charList) => (
    <ul className='char__grid'>
      {charList.map((item, i) => (
        <li 
          className='char__item'
          key={item.id}
          ref={(el) => (refs.current[i] = el)}
          // ref={(el) => setRefs(el, i)}
          onClick={() => {props.onCharSelected(item.id); changeStyle(i);}}
        >
          <img 
            src={item.thumbnail} 
            alt={item.name} 
          />
          <div className='char__name'>{item.name}</div>
        </li>
      ))}
    </ul>
  );

  const newCharListItems = charListItems(charList);

  const content = !(loading || error) ? newCharListItems : null;

  return (
    <div className='char__list'>
      {isErrorOrSpinner(loading, error)}
      {content}
      <button className='button button__main button__long'
        disabled={newItemLoading}
        style={{display: charEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}
      >
        <div className='inner'>load more</div>
      </button>
    </div>
  );
};


