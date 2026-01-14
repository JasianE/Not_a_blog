import React from "react";
import { useGetBlogsQuery } from "../app/slices/blogApi";
import { useParams } from "react-router";

function BlogItem(){
    const {data, isLoading, isError, error} = useGetBlogsQuery();
    const params = useParams();

    const blogOfInterest = data?.find((item) => {
        return item.id == Number(params.blogKey);
    });



    return(
        <div>
            {blogOfInterest ? 
            <>
                <h1>{blogOfInterest?.title}</h1>
            </> 
            : "Not found"}
        </div>
    )
}

export default BlogItem;