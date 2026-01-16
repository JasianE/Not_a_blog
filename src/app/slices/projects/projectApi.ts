import apiService from "../apiService";

export type Card = {
    img: string,
    title: string,
    description: string
};

export const projectApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        //Api endpoints
        getProjects: build.query<Card[], void>({
            query: () => "/projects"
        }),
        addBlog: build.mutation<Card, Card>({
            query: post => ({
                url: '/projects',
                method: 'POST',
                body: post
            })
        })
    }),
});

export const { useGetProjectsQuery, useAddBlogMutation } = projectApi;
