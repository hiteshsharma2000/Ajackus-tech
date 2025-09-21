import React from "react";

function Loader({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
        <span className="text-gray-700 font-semibold">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
