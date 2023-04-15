import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    dark: false,
    bgColor: '#292A2D',
    color: '#FFF',
  },
  reducers: {
    darkOn: (state, action) => {
      state.dark = !state.dark;
      state.bgColor = state.dark ? '#FFF' : '#292A2D';
      state.color = state.dark ? '#292A2D' : '#FFF';
    },
  },
});

export const { darkOn } = darkModeSlice.actions;
export default darkModeSlice.reducer;
