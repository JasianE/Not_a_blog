import { useGetBlogsQuery } from "../../app/slices/blogApi";
import { useParams, useNavigate } from "react-router";

function BlogItem() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBlogsQuery();
  const params = useParams();

  const blogOfInterest = data?.find((item) => item.id == Number(params.blogKey));

  if (!blogOfInterest && !isLoading) {
    navigate("/blog");
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

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">

      {/* CENTER COLUMN (blog content) */}
      <div className="mx-auto max-w-2xl w-full">

        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}

        {blogOfInterest ? (
          <>
            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white">
              {blogOfInterest.title}
            </h1>

            {/* META (date + author) */}
            <p className="mt-2 sm:mt-3 text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              {formatDateFromString(blogOfInterest.createdAt)}
            </p>

            {/* CONTENT */}
            <div className="prose dark:prose-invert mt-6 sm:mt-8 max-w-none leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line text-left text-sm sm:text-base">
              {blogOfInterest.content}
            </div>
          </>
        ) : (
          !isLoading && <h1>Not found</h1>
        )}

      </div>

    </div>
  );
}

export default BlogItem;
