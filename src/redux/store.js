import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideSlice';
import searchReducer from './searchSlice';
import paginationReducer from './paginationSlice';
import likeReducer from './likeSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    pagination: paginationReducer,
    like: likeReducer,
  },
});

export default store;
