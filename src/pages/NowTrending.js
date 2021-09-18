import React from "react";
import TrendingItems from "../Components/TrendingItems";

function NowTrending() {
  return (
    <div className="lg:ml-8 md:ml-0">
      <h1 className="text-white text-2xl font-semibold mt-12 md:text-3xl md:font-medium ">
        Now Trending
      </h1>

      <TrendingItems />
    </div>
  );
}

export default NowTrending;
