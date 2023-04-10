import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideSlice';
import searchReducer from './searchSlice';
import paginationReducer from './paginationSlice';
import mobileReducer from './mobileSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    pagination: paginationReducer,
    mobileApp: mobileReducer,
  },
});

export default store;
