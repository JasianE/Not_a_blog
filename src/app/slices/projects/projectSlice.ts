import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [{}]
}

const projectsSlice = createSlice({
    name: "projects", //forms an action
    initialState,
    reducers: {

    }
})

export default projectsSlice.reducer;