import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: true,
        sidebarWidth: 0,
    },
    reducers : {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
            if (window.innerWidth <= 564) {
              state.sidebarWidth = state.isOpen ? 0 : 200;
            } else {
              state.sidebarWidth = state.isOpen ? 0 : 220;
            }
          },
    }
})

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;