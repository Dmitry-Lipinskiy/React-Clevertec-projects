export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
}

// Отпровляем данные на сервер в формате JSON
// Если запрос успешен - отправляем персонажа в store
export const addHeroes = (request, newHero) => (dispatch) => {
  request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
    .then((res) => console.log(res, 'Отправка успешна'))
    .then(dispatch(heroCreated(newHero)))
    .catch((err) => console.log(err));
}

// Ф-ция берет id и по нему удоляет ненужного персонажа из store если запрос прошел успешно
export const onDeleteHeroes = (request, id) => (dispatch) => {
  request(`http://localhost:3001/heroes/${id}`, 'DELETE')
    .then((data) => console.log(data, 'Deleted'))
    .then(dispatch(heroDeleted(id)))
    .catch((err) => console.log(err));
}

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request('http://localhost:3001/filters')
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
}

export const heroesFetching = () => ({
  type: 'HEROES_FETCHING',
});

export const heroesFetched = (heroes) => ({
  type: 'HEROES_FETCHED',
  payload: heroes,
});

export const heroesFetchingError = () => ({
  type: 'HEROES_FETCHING_ERROR',
});

export const heroCreated = (hero) => ({
  type: 'HERO_CREATED',
  payload: hero,
});

export const heroDeleted = (id) => ({
  type: 'HERO_DELETED',
  payload: id,
});

export const filtersFetching = () => ({
  type: 'FILTERS_FETCHING',
});

export const filtersFetched = (filters) => ({
  type: 'FILTERS_FETCHED',
  payload: filters,
});

export const filtersFetchingError = () => ({
  type: 'FILTERS_FETCHING_ERROR',
});

export const activeFilterChanged = (filter) => ({
  type: 'ACTIVE_FILTER_CHANGED',
  payload: filter,
});
