import React from "react";
import TrendingItems from "../Components/TrendingItems";

function NowTrending() {
  return (
    <div>
      <h1 className="text-white text-2xl font-semibold mt-12">Now Trending</h1>

      <TrendingItems />
    </div>
  );
}

export default NowTrending;
