import React from "react";
import artists from "../data/Artists";
import { HiOutlineDotsVertical } from "react-icons/hi";

function PopularArtistsItems() {
  return (
    <div className="mt-4">
      {artists.map((artist) => {
        return (
          <div
            key={artist.id}
            className="flex justify-between mb-4 items-center cursor-pointer"
          >
            <div>
              <img
                src={artist.image}
                alt=""
                className="rounded-full object-cover w-14 h-14"
              />
            </div>
            <div className="flex-auto ml-4">
              <h1 className="text-white font-medium text-base">
                {artist.name}
              </h1>
              <h3 className="text-gray-500 text-sm font-normal">
                {artist.followers}
              </h3>
            </div>
            <div>
              <h3 className="text-white cursor-default">
                <HiOutlineDotsVertical />
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PopularArtistsItems;
