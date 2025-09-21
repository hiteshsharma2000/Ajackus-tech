import React from "react";

function Pagination({ currentPage, totalPages, onPageChange, limit, onLimitChange }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
      <div>
        <select
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        >
          {[10, 25, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n} / page
            </option>
          ))}
        </select>
      </div>

      {/* page buttons */}
      <div className="flex items-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition transform hover:scale-105 ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          Prev
        </button>

        <span className="px-3 py-2 text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition transform hover:scale-105 ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
