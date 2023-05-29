import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// import { addHeroes } from '../../actions';
import { addHeroes } from '../../slices/heroes';
import { useHttp } from '../../hooks/http.hook';
import { filtersSelector, filtersLoadingStatusSelector } from '../../selectors';

export const HeroesAddForm = () => {

  // Состояния для контроля формы
  const [heroName, setHeroName] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [heroElement, setHeroElement] = useState('');

  const filters = useSelector(filtersSelector);
  const filtersLoadingStatus = useSelector(filtersLoadingStatusSelector);

  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Генерация id через библиатеку
    const newHero = {
      id: uuidv4(),
      name: heroName,
      description: heroDescription,
      element: heroElement,
    };

    // Отпровляем данные на сервер в формате JSON
    // Если запрос успешен - отправляем персонажа в store
    dispatch(addHeroes(request, newHero));

    // Очищаем форму после отправки
    setHeroName('');
    setHeroDescription('');
    setHeroElement('');
  };

  const renderFilters = (filters, status) => {

    const isLoding = status === 'loading';
    const isError = status === 'error';

    if (isLoding) {
      return <option>Загрузка элементов</option>;
    } else if (isError) {
      return <option>Ошибка загрузки</option>;
    }

    // Если фильтры есть, то рендерим их
    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        // Один из фильтров нам тут не нужен
        // eslint-disable-next-line
        if (name === 'all') return;

        return (
          <option key={name} value={name}> 
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form className='border p-4 shadow-lg rounded' onSubmit={onSubmitHandler}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label fs-4'>
          Имя нового героя
        </label>
        <input
          required
          type='text'
          name='name'
          className='form-control'
          id='name'
          placeholder='Как меня зовут?'
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='text' className='form-label fs-4'>
          Описание
        </label>
        <textarea
          required
          name='text'
          className='form-control'
          id='text'
          placeholder='Что я умею?'
          style={{ height: '130px' }}
          value={heroDescription}
          onChange={(e) => setHeroDescription(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='element' className='form-label'>
          Выбрать элемент героя
        </label>
        <select 
          required 
          className='form-select' 
          id='element' 
          name='element'
          value={heroElement}
          onChange={(e) => setHeroElement(e.target.value)}
        >
          <option value=''>Я владею элементом...</option>
          {renderFilters(filters, filtersLoadingStatus)}
        </select>
      </div>

      <button type='submit' className='btn btn-primary'>
        Создать
      </button>
    </form>
  );
};