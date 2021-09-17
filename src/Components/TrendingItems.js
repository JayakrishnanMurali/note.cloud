import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import trending from "../data/Trending";

function TrendingItems() {
  return (
    <div className="py-6">
      {trending.map((trend) => {
        return (
          <div
            key={trend.id}
            className="flex items-center space-x-8 justify-between bg-gray-800 px-3 py-4 rounded-xl mb-4"
          >
            <div>
              <h3 className="text-yellow-600 text-4xl">
                <AiFillPlayCircle />
              </h3>
            </div>
            <div className="flex-auto">
              <h3 className="text-white">{trend.title}</h3>
              <h6 className="text-gray-500">{trend.author}</h6>
            </div>
            <div className="flex items-center">
              <h6 className="text-gray-500">4:00</h6>
              <div>
                <h3 className="text-white">
                  <HiOutlineDotsVertical />
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrendingItems;
