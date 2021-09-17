import React from "react";
import post from "../data/MusicPoster";
import "../styles/ReactAddedItems.css";

const RecentAddedItems = ({ image, title, author }) => {
  return (
    <div
      className="flex overflow-x-auto scroll space-x-6 my-6 cursor-pointer
    "
    >
      {post.map((eachPost) => {
        return (
          <div key={eachPost.id}>
            <img
              src={eachPost.image}
              alt=""
              className="h-52 object-cover min-w-min p-2 bg-gray-800 rounded-xl transition-colors hover:bg-gray-700"
            />
            <div className="ml-3">
              <h3 className="text-white mt-5 font-semibold text-lg">
                {eachPost.title}
              </h3>
              <h6 className="text-gray-500 font-medium w-36">
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
