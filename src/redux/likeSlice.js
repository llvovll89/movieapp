import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likeCount: 0,
};

export const likeButtonSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likeClick: (state, action) => {
      state.likeCount += 1;
      localStorage.setItem('likeCount', state.likeCount);
    },
    setLikeCountFromLocalStorage: (state) => {
      const likeCount = localStorage.getItem('likeCount');
      if (likeCount) {
        state.likeCount = parseInt(likeCount, 10);
      }
    },
  },
});

export const { likeClick , setLikeCountFromLocalStorage } = likeButtonSlice.actions;
export default likeButtonSlice.reducer;
