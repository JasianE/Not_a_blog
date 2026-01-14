import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import blogsReducer from './slices/blogsSlice';
import apiService from "./slices/apiService";

const store = configureStore({
    reducer: {
        blog:  blogsReducer,
        [apiService.reducerPath]: apiService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware),
});

export default store;