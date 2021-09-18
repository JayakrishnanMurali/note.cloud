import React from "react";
import PopularArtistsItems from "../Components/PopularArtistsItems";

function PopularArtists() {
  return (
    <div className="lg:ml-8 md:ml-0">
      <h1 className="text-white text-2xl font-semibold mt-12 md:text-3xl md:font-medium md:mt-0">
        Popular Artists
      </h1>
      <PopularArtistsItems />
    </div>
  );
}

export default PopularArtists;
