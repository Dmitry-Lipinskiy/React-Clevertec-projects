import { Component } from 'react';
// import classNames from 'classnames';

import { MarvelService } from '../../services/marvelService/MarvelService';
import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

import './charList.scss';

export class CharList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false,
    offset: 210,
    newItemLoading: false,
    charEnded: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    // this.marvelService
    //   .getAllCharacters()
    //   .then(res => console.log(res))
    //   .then(this.onCharListLoaded)
    //   .catch(this.onError)

    this.onRequest();
  };

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError)
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    });
  };

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    this.setState(({offset, charList}) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended
    }));
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  charListItems = (charList) => (
    <ul className='char__grid'>
      {charList.map((item) => (
        <li 
          className='char__item'
          // className='char__item char__item_selected'
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
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
  
  render = () => {
    const { charList, loading, error, newItemLoading, charEnded, offset } = this.state;

    const charListItems = this.charListItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? charListItems : null;

    return (
      <div className='char__list'>
        {errorMessage}
        {spinner}
        {content}
        <button className='button button__main button__long'
          disabled={newItemLoading}
          style={{display: charEnded ? 'none' : 'block'}}
          onClick={() => this.onRequest(offset)}
        >
          <div className='inner'>load more</div>
        </button>
      </div>
    );
  };
};


