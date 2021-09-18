import React from "react";

function SideButtons({ icon, text }) {
  return (
    <div className="flex items-center text-white  rounded-xl pr-9 py-3 transition-all mb-4 hover:bg-yellow-500 hover:text-gray-800">
      <h3 className="mr-4 pl-4">{icon}</h3>
      <h3 className="text-lg font-semibold pr-5">{text}</h3>
    </div>
  );
}

export default SideButtons;
