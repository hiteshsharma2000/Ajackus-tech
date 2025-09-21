import React from "react";

function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full max-w-sm"
    />
  );
}

export default SearchBar;
