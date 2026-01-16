
import React from "react";
import { useGetBlogsQuery } from "../../app/slices/blogApi";
import type { Blog } from "../../types";
import { useNavigate } from "react-router";
import { useGetProjectsQuery } from "../../app/slices/projects/projectApi";

function ProjectPage() {
  const { data, isLoading, isError } = useGetProjectsQuery();
  const navigate = useNavigate();

  const handleClick = (item: Blog) => {
    navigate(`/project/${item.id}`);
  };

  if (isLoading) return <div className="mt-10 text-center">Loading...</div>;
  if (isError) return <div className="mt-10 text-center">Something went wrong.</div>;

  return (
    <div className="mt-16">
        <h1>Projects</h1>
        <h2 className="mt-6">Lazeez Swharama helped me build these</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item) => (
            <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm 
                        hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
            {/* IMAGE */}
            <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <img
                src={
                    item.coverImg ??
                    "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?auto=format&fit=crop&w=800&q=60"
                }
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-3">
                {item.description ?? "No description provided."}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default ProjectPage;
