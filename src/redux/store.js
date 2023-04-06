import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './allSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
  },
});

export default store;
