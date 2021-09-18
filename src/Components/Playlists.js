import React from "react";
import PlaylistItems from "./PlaylistItems";

function Playlists() {
  return (
    <div className="mt-7 pl-4">
      <h2 className="text-gray-600 tracking-widest cursor-default font-semibold text-lg">
        PLAYLISTS
      </h2>
      <PlaylistItems title={"Mood Booster"} />
      <PlaylistItems title={"Coding"} />
      <PlaylistItems title={"Workouts"} />
    </div>
  );
}

export default Playlists;
