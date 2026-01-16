import React from "react";
import { useGetBlogsQuery } from "../../app/slices/blogApi";
import type { Blog } from "../../types";
import { useNavigate } from "react-router";
import PageContainer from "../../components/molecules/PageContainer";


function Blog(){
    const {data, isLoading, isError, error} = useGetBlogsQuery();
    const navigate = useNavigate();

    const handleClick = (item: Blog) => {
    
        navigate(`/blog/${item.id}`);
    }

    
    
    function formatDateFromString(dateStr: string): string {
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) return "Invalid date";

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    }


    return(
        <PageContainer>
            <div>
                {isLoading ? "loading..." : 
                <>
                {data?.map((item) => {
                    console.log(item)
                    return (        
                    <div className="group bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 cursor-pointer hover:shadow-md hover:border-blue-300 transition"
                    onClick={() => {handleClick(item)}}>
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                            <img
                            className="size-full absolute top-0 start-0 object-cover"
                            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                            alt="Card Image"
                            />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-gray-500 dark:text-neutral-400 group-hover:text-blue-600">
                                {item.author}
                            </p>

                            <div className="mt-5 sm:mt-auto">
                                <p className="text-xs text-gray-500 dark:text-neutral-500 group-hover:text-blue-600">
                                {formatDateFromString(item.createdAt)}
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                    )
                })}

                
                </>}
            </div>
        </PageContainer>
    )
}

export default Blog;