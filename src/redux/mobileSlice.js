import { createSlice } from '@reduxjs/toolkit';

const mobileSlice = createSlice({
  name: 'mobileApp',
  initialState: {
    isMobile: false,
  },
  reducers: {
    mobileSizeOn: (state, action) => {
      state.isMobile = !state.isMobile;
      console.log(state.isMobile);
    },
  },
});

export const { mobileSizeOn, mobileSizeOff } = mobileSlice.actions;
export default mobileSlice.reducer;
