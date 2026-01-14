import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: 'apiService', //guessing is the same as the ones for slices
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
    }),
    endpoints: () => ({}),
})

export default apiService