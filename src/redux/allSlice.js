import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false,
        sidebarWidth: 250,
    },
    reducers : {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
            state.sidebarWidth = state.sidebarWidth === 250 ? 80 : 250;
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;