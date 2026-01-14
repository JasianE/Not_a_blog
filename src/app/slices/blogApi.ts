import type { Blog } from "../../types";
import apiService from "./apiService";

export const blogApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        //Api endpoints
        getBlogs: build.query<Blog[], void>({
            query: () => "/blogs"
        }),
    }),
});

export const { useGetBlogsQuery } = blogApi;