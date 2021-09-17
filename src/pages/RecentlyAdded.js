import React from "react";
import RecentAddedItems from "../Components/RecentAddedItems";

const RecentlyAdded = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-semibold mt-12">
        Recently Added
      </h1>

      <RecentAddedItems />
    </div>
  );
};

export default RecentlyAdded;
