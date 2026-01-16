
import React from "react";
import { useGetBlogsQuery } from "../../app/slices/blogApi";
import type { Blog } from "../../types";
import { useNavigate } from "react-router";
import PageContainer from "../../components/molecules/PageContainer";

function Blog() {
  const { data, isLoading, isError } = useGetBlogsQuery();
  const navigate = useNavigate();

  const handleClick = (item: Blog) => {
    navigate(`/blog/${item.id}`);
  };

  function formatDateFromString(dateStr: string): string {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Invalid date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <PageContainer>
        <h1 className="mt-12">Blog</h1>
        <h2 className="mt-12">Take a look inside mah dome</h2>
      <div>
        {isLoading && "loading..."}
        {isError && "Something went wrong."}

        {!isLoading &&
          !isError &&
          data?.map((item) => (
            <div
              key={item.id}
              // Invisible card until hover/focus
              className="
                mt-6 w-full sm:flex rounded-xl transition
                bg-transparent border border-transparent shadow-none
                hover:border-blue-300/70 hover:ring-1 hover:ring-blue-200/50 hover:shadow-sm
                focus-within:border-blue-300/70 focus-within:ring-1 focus-within:ring-blue-200/50
                dark:hover:border-blue-400/60 dark:hover:ring-blue-400/30
                cursor-pointer
              "
              onClick={() => handleClick(item)}
            >
              {/* TEXT (left on desktop) */}
              <div className="flex-1 p-4 sm:p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 text-left">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {item.author}
                </p>

                <div className="mt-5">
                  <p className="text-xs text-gray-500 dark:text-neutral-500">
                    {formatDateFromString(item.createdAt)}
                  </p>
                </div>
              </div>

              {/* IMAGE ON THE RIGHT (fills height on desktop) */}
              <div
                className="
                  order-2 relative shrink-0 w-full h-40 overflow-hidden rounded-b-xl
                  sm:w-60 md:w-64 sm:h-auto sm:self-stretch sm:rounded-b-none sm:rounded-r-xl
                "
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?auto=format&fit=crop&w=560&q=80"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
      </div>
    </PageContainer>
  );
}

export default Blog;