// import { createAction } from '@reduxjs/toolkit';

// import { heroesFetching, heroesFetched, heroesFetchingError, heroCreated, heroDeleted } from '../slices/heroes';

// import { filtersFetching, filtersFetched, filtersFetchingError } from '../slices/filters';

// export const fetchHeroes = (request) => (dispatch) => {
//   dispatch(heroesFetching());
//   request('http://localhost:3001/heroes')
//     .then((data) => dispatch(heroesFetched(data)))
//     .catch(() => dispatch(heroesFetchingError()));
// }

// // Отпровляем данные на сервер в формате JSON
// // Если запрос успешен - отправляем персонажа в store
// export const addHeroes = (request, newHero) => (dispatch) => {
//   request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
//     .then((res) => console.log(res, 'Отправка успешна'))
//     .then(dispatch(heroCreated(newHero)))
//     .catch((err) => console.log(err));
// }

// // Ф-ция берет id и по нему удоляет ненужного персонажа из store если запрос прошел успешно
// export const onDeleteHeroes = (request, id) => (dispatch) => {
//   request(`http://localhost:3001/heroes/${id}`, 'DELETE')
//     .then((data) => console.log(data, 'Deleted'))
//     .then(dispatch(heroDeleted(id)))
//     .catch((err) => console.log(err));
// }

// export const fetchFilters = (request) => (dispatch) => {
//   dispatch(filtersFetching());
//   request('http://localhost:3001/filters')
//     .then((data) => dispatch(filtersFetched(data)))
//     .catch(() => dispatch(filtersFetchingError()));
// }

// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// export const heroCreated = createAction('HERO_CREATED');

// export const heroDeleted = createAction('HERO_DELETED');

// export const filtersFetching = createAction('FILTERS_FETCHING');

// export const filtersFetched = createAction('FILTERS_FETCHED');

// export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

// export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED');


