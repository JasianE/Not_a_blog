import React from "react";
import { useGetBlogsQuery } from "../../app/slices/blogApi";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function BlogItem(){
    const navigate = useNavigate();
    const {data, isLoading, isError, error} = useGetBlogsQuery();
    const params = useParams();

    const blogOfInterest = data?.find((item) => {
        return item.id == Number(params.blogKey);
    });

    if(!blogOfInterest){
        navigate("/blog")
    }
    return(
        <div>
            {blogOfInterest ? 
            <>
                <h1>{blogOfInterest?.title}</h1>
                <h2>{blogOfInterest.author}</h2>
                <p>{blogOfInterest.content}</p>
            </> 
            : <h1>Not found</h1>}
        </div>
    )
}

export default BlogItem;