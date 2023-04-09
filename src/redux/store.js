import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideSlice';
import searchReducer from './searchSlice';
import paginationReducer from './paginationSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    pagination: paginationReducer,
  },
});

export default store;
