import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Toast from "./Toast";

function UserGrid({ toast, setToast, users, onEdit, onDelete }) {
  return (
    <div className="w-full p-6 min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => {
          const [firstName, lastName] = user.name.split(" ");
          return (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-200 flex flex-col justify-between"
            >
              {/* User Info */}
              <div className="space-y-2">
                <div className="text-sm text-purple-500 font-semibold">ID: {user.id}</div>
                <div className="text-xl font-bold text-gray-800">
                  {firstName} {lastName || ""}
                </div>
                <div className="text-sm text-gray-600 break-words">{user.email}</div>
                <div className="text-sm text-blue-600 font-semibold">
                  {user.company?.name || "N/A"}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end mt-5 space-x-3">
                {/* Edit Button */}
                <button
                  onClick={() => onEdit(user)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-md hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Pencil size={16} /> Edit
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => onDelete(user.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-xl shadow-md hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 focus:ring-2 focus:ring-red-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserGrid;
