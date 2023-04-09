import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false,
        sidebarWidth: 240,
    },
    reducers : {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
            state.sidebarWidth = state.sidebarWidth === 240 ? 80 : 240;
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;