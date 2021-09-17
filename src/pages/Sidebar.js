import React from "react";
import SideButtons from "../Components/SideButtons";
import { UilEstate } from "@iconscout/react-unicons";
import { UilMusic } from "@iconscout/react-unicons";
import { UilFolder } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";

const homeBtn = <UilEstate />;
const musicBtn = <UilMusic />;
const folderBtn = <UilFolder />;
const artistBtn = <UilUsersAlt />;
const likeBtn = <UilHeart />;

function Sidebar() {
  return (
    <div>
      <SideButtons icon={homeBtn} text={"Home"} />
      <SideButtons icon={musicBtn} text={"Songs"} />
      <SideButtons icon={folderBtn} text={"Albums"} />
      <SideButtons icon={artistBtn} text={"Artists"} />
      <SideButtons icon={likeBtn} text={"Liked"} />
    </div>
  );
}

export default Sidebar;
