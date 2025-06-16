import React from "react";

const BlogPostPreview = ({ imageSrc, title, previewText }) => {
  return (
    <div className="flex items-center space-x-4 p-4  rounded-lg shadow-md max-w-lg mx-auto">
      {/* Blog Image - Aligned Left */}
      <img src={imageSrc} alt={title} className="w-32 h-32 object-cover rounded-lg" />

      {/* Title & Preview Text - Aligned Right */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-slate-300">{title}</h2>
        <p className="text-slate-400">{previewText}</p>
      </div>
    </div>
  );
};

export default BlogPostPreview;