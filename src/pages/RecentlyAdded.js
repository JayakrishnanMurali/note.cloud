import React from "react";
import RecentAddedItems from "../Components/RecentAddedItems";

const RecentlyAdded = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-semibold mt-12 md:text-3xl md:font-medium md:mt-0">
        Recently Added
      </h1>
      <RecentAddedItems />
    </div>
  );
};

export default RecentlyAdded;
