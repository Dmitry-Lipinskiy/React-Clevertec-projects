const initialState = {
  heroes: [], // heroes.json
  heroesLoadingStatus: 'idle', // ничего не происходит (false)
  filters: [], // heroes.json
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
  // filteredHeroes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
        // Фильтрация героев
        // filteredHeroes: 
        //   state.activeFilter === 'all'
        //     ? action.payload
        //     : action.payload.filter((item) => item.element === state.activeFilter),
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HERO_CREATED':
      // Формируем новый массив
      // let newCreatedHeroList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        // Фильтруем новые данные по фильтру, который сейчас применяется
        // filteredHeroes: 
        //   state.activeFilter === 'all'
        //     ? newCreatedHeroList
        //     : newCreatedHeroList.filter((item) => item.element === state.activeFilter),
      };
    case 'HERO_DELETED':
      // Формеруем новый массив
      // const newHeroList = state.heroes.filter((item) => item.id !== action.payload);
      return {
        ...state,
        heroes: state.heroes.filter((item) => item.id !== action.payload),
        // Фильтруем новые данные по фильтру, который сейчас применяется
        // filteredHeroes: 
        //   state.activeFilter === 'all' 
        //     ? newHeroList 
        //     : newHeroList.filter((item) => item.element === state.activeFilter),
      };
    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersLoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        filtersLoadingStatus: 'error',
      };
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
        // filteredHeroes: 
        //   action.payload === 'all'
        //     ? state.heroes
        //     : state.heroes.filter((item) => item.element === action.payload),
      };
    default:
      return state;
  }
};