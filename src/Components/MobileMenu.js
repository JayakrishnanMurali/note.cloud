import React from "react";
import { UilMultiply } from "@iconscout/react-unicons";

function MobileMenu() {
  const menuClose = () => {
    var menu = document.getElementById("menuBar");
    var body = document.getElementById("body");

    menu.classList.toggle("hidden");
    body.style.overflow = "auto";
  };

  return (
    <div>
      <div
        className="hidden relative mobile-menu bg-gray-200 z-20 overflow-hidden h-screen"
        id="menuBar"
      >
        <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 ">
          <ul className="flex flex-col font-extrabold text-3xl ">
            <li className="text-black mb-2 ">
              <a href="/home" className="transition-all hover:text-yellow-500">
                Home
              </a>
            </li>
            <li className="text-black mb-2">
              <a href="/songs" className="transition-all hover:text-yellow-500">
                Songs
              </a>
            </li>
            <li className="text-black mb-2">
              <a
                href="/albums"
                className="transition-all hover:text-yellow-500"
              >
                Albums
              </a>
            </li>
            <li className="text-black">
              <a href="/liked" className="transition-all hover:text-yellow-500">
                Liked
              </a>
            </li>
          </ul>
        </div>

        <button
          className="transition-all justify-self-end order-2 cursor-pointer right-9 top-9 text-black fixed z-50"
          id="menuCloseBtn"
          onClick={menuClose}
        >
          <UilMultiply className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
