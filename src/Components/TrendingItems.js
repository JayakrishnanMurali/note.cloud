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
            className="flex items-center space-x-8 justify-between cursor-pointer bg-gray-800 px-3 py-4 rounded-xl mb-4 transition-colors hover:bg-gray-700"
          >
            <div>
              <h3 className="text-yellow-600 text-4xl transition-all cursor-default transform hover:scale-110">
                <AiFillPlayCircle />
              </h3>
            </div>
            <div className="flex-auto">
              <h3 className="text-white font-medium text-base">
                {trend.title}
              </h3>
              <h6 className="text-gray-500 text-sm font-normal">
                {trend.author}
              </h6>
            </div>
            <div className="flex items-center">
              <h6 className="text-gray-500 text-base mr-2">4:00</h6>
              <div>
                <h3 className="text-white cursor-default">
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
