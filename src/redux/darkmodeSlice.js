import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false,
    bgColor: "#202123",
    color: "#FFF",

}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        darkOn : (state, action) => {
            state.dark = !state.dark;
        }
    }
})

export const { darkOn } = darkModeSlice.actions;
export default darkModeSlice.reducer;