import React from "react";
import { UilHeadphonesAlt } from "@iconscout/react-unicons";
import { UisBars } from "@iconscout/react-unicons-solid";
import { UilUser } from "@iconscout/react-unicons";

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
      sm:order-2 sm:flex-1 sm:ml-6 sm:mr-14 md:mr-8
      "
      >
        <input
          type="text"
          placeholder="Search"
          className="rounded-full w-80 h-8 px-3 bg-gray-800 text-white text-sm outline-none 
           sm:w-full sm:px-4 md:px-6
          "
        />
      </div>

      <div className="justify-self-end order-2 cursor-pointer text-white fixed z-20 sm:right-5 md:hidden">
        <UisBars className="w-7 h-7" />
      </div>

      <div className=" flex items-center order-4 text-white cursor-pointer transition-all hover:text-yellow-500">
        <div className="hidden md:block  ">
          <UilUser className="w-7 h-7" />
        </div>
        <div className="hidden lg:block   ml-3">
          <h1>Jayakrishnan</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
