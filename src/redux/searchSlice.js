import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: "",
    results: null,
  },
  reducers: {
    updateSearch: (state, action) => {
      state.query =  action.payload;
    },
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { updateSearch, updateResults } = searchSlice.actions;
export default searchSlice.reducer;
