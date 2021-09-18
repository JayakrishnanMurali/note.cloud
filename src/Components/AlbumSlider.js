import React from "react";
import "../styles/AlbumSlider.css";

function AlbumSlider({ title, descrption, image }) {
  return (
    <div className=" bgImage mt-6 overflow-hidden rounded-md">
      <div className="bg-gray-800 bg-opacity-70">
        <div className="flex items-center justify-between p-7">
          <div className="cursor-pointer">
            <h1 className="text-white font-bold text-4xl">{title}</h1>
            <h3 className="text-gray-400 text-base font-medium mt-3">
              {descrption}
            </h3>
          </div>
          <div className="transition-all transform hover:rotate-1 hover:scale-105 hover:shadow-lg">
            <img
              src={image}
              alt=""
              className="object-cover h-72 cursor-pointer md:h-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumSlider;
