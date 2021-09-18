import React from "react";
import AlbumSlider from "../Components/AlbumSlider";

function Albums() {
  return (
    <div className="mt-12 ">
      <h1 className="text-white text-3xl font-medium">Albums</h1>

      <div>
        <AlbumSlider
          title={"PAIN"}
          descrption={"XYZ Studio Label"}
          image={
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          }
        />
      </div>
    </div>
  );
}

export default Albums;
