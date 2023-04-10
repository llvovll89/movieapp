import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: true,
        sidebarWidth: 75,
    },
    reducers : {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
            state.sidebarWidth = state.sidebarWidth === 75 ? 240 : 75;
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;