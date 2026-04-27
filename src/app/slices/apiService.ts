import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: 'apiService', 
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
    }),
    endpoints: () => ({}),
})

export default apiService