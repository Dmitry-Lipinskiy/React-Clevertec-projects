import { legacy_createStore as createStore, combineReducers } from 'redux';

// import { reducer } from '../reducers';
import { filters } from '../reducers';
import { heroes } from '../reducers';

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = createStore(
  combineReducers({ heroes, filters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);