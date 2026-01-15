import type { Blog } from "../../types";
import apiService from "./apiService";

export type newBlog = {
    content: "",
    title: "",
    description: ""
}

export const blogApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        //Api endpoints
        getBlogs: build.query<Blog[], void>({
            query: () => "/blogs"
        }),
        addBlog: build.mutation<Blog, newBlog>({
            query: post => ({
                url: '/blogs',
                method: 'POST',
                body: post
            })
        })
    }),
});

export const { useGetBlogsQuery, useAddBlogMutation } = blogApi;
