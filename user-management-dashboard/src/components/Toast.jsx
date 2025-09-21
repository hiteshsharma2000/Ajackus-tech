import React, { useEffect, useState } from "react";

function Toast({ message, type = "success", onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div
      className={`fixed top-25 right-5 px-4 py-2 text-white rounded-lg shadow-lg transition-transform duration-300 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      } ${bgColor}`}
    >
      {message}
    </div>
  );
}

export default Toast;
