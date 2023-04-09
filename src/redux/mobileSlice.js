import { createSlice } from '@reduxjs/toolkit';

export const mobileSlice = createSlice({
  name: 'mobile_ver',
  initialState: {
    maxSize: '768px',
  },
  reducers: {
    mobileSizeOn: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { mobileSizeOn } = mobileSlice.actions;
export default mobileSizeOn.reducer;
