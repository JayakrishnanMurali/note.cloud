import React from "react";

function SideButtons({ icon, text }) {
  return (
    <div className="flex items-center text-white w-56 rounded-xl px-9 py-3 transition-all mb-4 hover:bg-yellow-500 hover:text-gray-800">
      <h3 className="mr-4">{icon}</h3>
      <h3 className="text-lg font-semibold">{text}</h3>
    </div>
  );
}

export default SideButtons;
