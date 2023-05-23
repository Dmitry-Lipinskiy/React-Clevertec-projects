import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { activeFilterChanged, fetchFilters } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import { Spinner } from '../spinner';
import { filtersSelector, filtersLoadingStatusSelector, activeFilterSelector } from '../../selectors';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active

export const HeroesFilters = () => {

  // const { filters, activeFilter, filtersLoadingStatus } = useSelector(
  //   // (state) => state
  //   (state) => state.filters
  // );

  const filters = useSelector(filtersSelector);
  const filtersLoadingStatus = useSelector(filtersLoadingStatusSelector);
  const activeFilter = useSelector(activeFilterSelector);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    // dispatch(filtersFetching());
    // request('http://localhost:3001/filters')
    //   .then((data) => dispatch(filtersFetched(data)))
    //   .catch(() => dispatch(filtersFetchingError()));
    dispatch(fetchFilters(request));
    // eslint-disable-next-line
  }, []);

  const isLoading = filtersLoadingStatus === 'loading';
  const isError = filtersLoadingStatus === 'error';

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
  }

  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h5 className='text-center mt-5'>Фильтры не найдены</h5>;
    }

    // Данные в json-файле расширины классами и текстом
    return arr.map(({ name, className, label }) => {
      // Используем библиотеку classNames и формируем классы динамически
      const btnClass = classNames('btn', className, {
        active: name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClass}
          onClick={() => dispatch(activeFilterChanged(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);

  return (
    <div className='card shadow-lg mt-4'>
      <div className='card-body'>
        <p className='card-text'>Отфильтруйте героев по элементам</p>
        <div className='btn-group'>
          {elements}
        </div>
      </div>
    </div>
  );
};
