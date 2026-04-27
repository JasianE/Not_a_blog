import apiService from "../apiService";

export type Card = {
    img: string,
    title: string,
    description: string,
    link: string,
    src: string,
    id: string
};

// I guess this would make sense if I had like a central server that hosted everything i ever wanted to fetch, 
// Then like have multiple containers running each service or smth, like a drive to fetch files, something that hosts my website, etc

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
