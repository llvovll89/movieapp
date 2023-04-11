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
            state.sidebarWidth = state.sidebarWidth === 0 ? 220 : 0;
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;