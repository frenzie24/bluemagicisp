import React from "react";

const EyeCatch = ({ title, subtitle, buttonText }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg shadow-xl text-center">
      <h1 className="text-3xl font-bold mb-2 animate-pulse">{title}</h1>
      <p className="text-lg opacity-90">{subtitle}</p>
      <button className="mt-4 px-6 py-2 bg-white text-purple-600 font-semibold rounded-md shadow-md hover:bg-purple-200 transition-all">
        {buttonText}
      </button>
    </div>
  );
};

export default EyeCatch;
