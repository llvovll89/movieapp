import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
};

export const paginationSlice  = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

// 여기서 selectCurrentPage 할당하여 보냄 -> 그냥 컴포넌트에서 해도상관 X
export const selectCurrentPage = (state) => state.pagination.currentPage;
export default paginationSlice.reducer;
