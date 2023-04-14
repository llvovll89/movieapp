import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    dark: false,
    bgColor: '#000',
    color: '#FFF',
  },
  reducers: {
    darkOn: (state, action) => {
      state.dark = !state.dark;
      state.bgColor = state.dark ? '#ffffff' : '#000';
      state.color = state.dark ? '#000' : '#FFF';
    },
  },
});

export const { darkOn } = darkModeSlice.actions;
export default darkModeSlice.reducer;
