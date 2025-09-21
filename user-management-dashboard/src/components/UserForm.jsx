import React, { useState, useEffect } from "react";

function UserForm({ user, onSubmit, onCancel }) {
  const [form, setForm] = useState({ name: "", email: "", company: { name: "" } });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        company: { name: user.company?.name || "" },
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") {
      setForm((prev) => ({ ...prev, company: { name: value } }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      return alert("Name & Email are required");
    }
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-11/12 max-w-md transform transition-all duration-300 scale-95 animate-scaleUp">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {user ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
          <input
            type="text"
            name="company"
            placeholder="Department"
            value={form.company?.name || ""}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
