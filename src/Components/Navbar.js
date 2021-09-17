import React from "react";
import { UilHeadphonesAlt } from "@iconscout/react-unicons";
import { UisBars } from "@iconscout/react-unicons-solid";

function Navbar() {
  return (
    <nav
      className="grid   grid-cols-2  
    sm:flex   sm:items-center 
    "
    >
      <div className="flex order-1 cursor-pointer mb-12 sm:mb-0">
        <UilHeadphonesAlt className="text-yellow-600" />
        <h3 className="px-2 font-extrabold text-lg text-white">Note.cloud</h3>
      </div>

      <div
        className=" order-3 col-span-2 justify-self-center 
      sm:order-2 sm:flex-1 sm:ml-6 sm:mr-14
      "
      >
        <input
          type="text"
          placeholder="Search"
          className="rounded-full w-56 h-8 px-3 bg-gray-800 text-white text-sm outline-none 
          sm:w-96 sm:w-full sm:px-4
          "
        />
      </div>

      <div className="justify-self-end order-2 cursor-pointer text-white fixed z-20">
        <UisBars className="w-7 h-7" />
      </div>
    </nav>
  );
}

export default Navbar;
