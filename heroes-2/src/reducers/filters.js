// import { createReducer } from '@reduxjs/toolkit';

// import { filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged } from '../actions';

// const initialState = {
//   filters: [], 
//   filtersLoadingStatus: 'idle',
//   activeFilter: 'all',
// };

// export const filters = createReducer(initialState, (builder) => {
//   builder
//     .addCase(filtersFetching, (state) => {
//       state.filtersLoadingStatus = 'loading';
//     })
//     .addCase(filtersFetched, (state, action) => {
//       state.filtersLoadingStatus = 'idle';
//       state.filters = action.payload;
//     })
//     .addCase(filtersFetchingError, (state) => {
//       state.filtersLoadingStatus = 'error';
//     })
//     .addCase(activeFilterChanged, (state, action) => {
//       state.activeFilter = action.payload;
//     })
//     .addDefaultCase(() => {});
// });