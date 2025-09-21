import React, { useState } from "react";
import { Filter, Plus, Menu, X } from "lucide-react";
import Toast from "./Toast";

function Navbar({
  toast,
  setToast,
  query,
  setQuery,
  onFilterClick,
  onAddUser,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white  shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-600 animate-pulse">
            User Dashboard
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            {/* Search Box */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users..."
              className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-64"
            />

            {/* Filter Button */}
            <button
              onClick={onFilterClick}
              className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-purple-300 transition"
            >
              <Filter size={16} />
              Filter
            </button>

            {/* Add User Button */}
            <button
              onClick={onAddUser}
              className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600 focus:ring-2 focus:ring-green-300 transition"
            >
              <Plus size={16} />
              Add User
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-inner">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search users..."
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />
          <button
            onClick={() => {
              onFilterClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-purple-300 transition"
          >
            <Filter size={16} />
            Filter
          </button>
          <button
            onClick={() => {
              onAddUser();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600 focus:ring-2 focus:ring-green-300 transition"
          >
            <Plus size={16} />
            Add User
          </button>
        </div>
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </nav>
  );
}

export default Navbar;
