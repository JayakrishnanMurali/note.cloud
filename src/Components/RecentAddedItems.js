import React from "react";
import post from "../data/MusicPoster";
import "../styles/ReactAddedItems.css";

const RecentAddedItems = ({ image, title, author }) => {
  return (
    <div
      className="flex overflow-x-auto scroll space-x-16 my-6
    "
    >
      {post.map((eachPost) => {
        return (
          <div>
            <img
              src={eachPost.image}
              alt=""
              className="h-60 object-cover min-w-min p-6 bg-gray-800 rounded-xl"
            />
            <div className="ml-3">
              <h3 className="text-white mt-5 font-semibold text-lg">
                {eachPost.title}
              </h3>
              <h6 className="text-gray-500 font-medium w-40">
                {eachPost.author}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentAddedItems;
