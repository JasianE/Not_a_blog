
import React, { useState } from "react";
import { useAddBlogMutation } from "../../app/slices/blogApi";
import type {newBlog} from "../../app/slices/blogApi";


const BlogPostForm: React.FC = () => {
  const [formData, setFormData] = useState<newBlog>({
    title: "",
    description: "",
    content: "",
  });
  const [addNewPost, {isLoading}] = useAddBlogMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resetData: newBlog = {
        title: "",
        description: "",
        content: ""
    }
    setFormData(resetData);
    try{
        await addNewPost(formData)
    } catch(err){
        console.log('poo')
    }
  };

  return (
    <>
        {isLoading ? <h1>Loading...</h1> : 
            <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-200 space-y-6"
            >
        <h2 className="text-2xl font-semibold tracking-tight">Create New Blog Post</h2>
        {/* Title */}
        <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">Title</label>
            <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        {/* Description */}
        <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">Short Description</label>
            <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">Content</label>
            <textarea
            name="content"
            rows={10}
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        {/* Submit */}
        <button
            type="submit"
            className="w-full py-3 text-black font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-all"
        >
            Publish Post
        </button>
        </form>
        
        }
    </>
    
  );
};

export default BlogPostForm;
