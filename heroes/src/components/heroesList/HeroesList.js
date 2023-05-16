import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { heroesFetching, heroesFetched, heroesFetchingError, heroDeleted } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import { HeroesListItem } from '../heroesListItem';
import { Spinner } from '../spinner';

// Задача для этого компонента:
// При клике на 'крестик' идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

export const HeroesList = () => {

  // const { filteredHeroes, heroesLoadingStatus } = useSelector((state) => state);

  // const filteredHeroes = useSelector((state) => {
  //   if (state.activeFilter === 'all') {
  //     return state.heroes;
  //   } else {
  //     return state.heroes.filter((item) => item.element === state.activeFilter);
  //   }
  // });

  const filtredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.heroes.heroes,
    (filter, heroes) => {
      if (filter === 'all') {
        return heroes;
      } else {
        return heroes.filter((item) => item.element === filter);
      }
    }
  );

  const filteredHeroes = useSelector(filtredHeroesSelector);

  const heroesLoadingStatus = useSelector((state) => state.heroes.heroesLoadingStatus);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    request('http://localhost:3001/heroes')
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));
    // eslint-disable-next-line
  }, []);

  // Ф-ция берет id и по нему удоляет ненужного персонажа из store если запрос прошел успешно
  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/heroes/${id}`, 'DELETE')
      .then((data) => console.log(data, 'Deleted'))
      .then(dispatch(heroDeleted(id)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [request]);

  if (heroesLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className='text-center mt-5'>Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => (
      <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
    ));
  };

  const elements = renderHeroesList(filteredHeroes);
  return <ul>{elements}</ul>;
};
