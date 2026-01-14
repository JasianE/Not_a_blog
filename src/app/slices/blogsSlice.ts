import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [{}]
}

const blogsSlice = createSlice({
    name: "blogs", //forms an action
    initialState,
    reducers: {

    }
})

export default blogsSlice.reducer;