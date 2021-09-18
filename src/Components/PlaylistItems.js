import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function PlaylistItems({ title }) {
  return (
    <div className="flex mt-4 items-center text-white text-lg cursor-pointer">
      <h1 className="mr-2">
        <AiOutlineMenuUnfold />
      </h1>
      <h4>{title}</h4>
    </div>
  );
}

export default PlaylistItems;
