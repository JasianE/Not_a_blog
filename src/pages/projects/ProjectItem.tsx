
import React from "react";
import { useParams, useNavigate } from "react-router";
import { useGetProjectsQuery } from "../../app/slices/projects/projectApi";

function ProjectItem() {
  const { projectKey } = useParams();
  const { data, isLoading, isError } = useGetProjectsQuery();

  const projectOfInterest = data?.find((item) => item.id == projectKey);

  const handleClick = () => {
    if (projectOfInterest?.src) {
      window.location.href = projectOfInterest.src;
    }
  };

  if (isLoading) return <div className="mt-20 text-center">Loading…</div>;
  if (isError || !projectOfInterest)
    return <div className="mt-20 text-center text-red-600">Project not found.</div>;

  return (
    <div className="mt-20 flex flex-col items-center px-4">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        {projectOfInterest.title}
      </h1>

      {/* IMAGE */}
      <div className="mt-10 w-full max-w-3xl rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-neutral-700">
        <img src={projectOfInterest.src}></img>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleClick}
        className="
          mt-10 px-6 py-3 rounded-lg font-medium
          bg-blue-600 text-black hover:bg-blue-700
          transition shadow-sm hover:shadow-md
        "
      >
        View Project
      </button>
    </div>
  );
}

export default ProjectItem;
