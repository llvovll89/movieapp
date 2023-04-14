import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideSlice';
import searchReducer from './searchSlice';
import paginationReducer from './paginationSlice';
import likeReducer from './likeSlice';
import darkReducer from './darkmodeSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    pagination: paginationReducer,
    like: likeReducer,
    darkMode: darkReducer,
  },
});

export default store;
