import React from "react";
import SideButtons from "../Components/SideButtons";
import { UilEstate } from "@iconscout/react-unicons";
import { UilMusic } from "@iconscout/react-unicons";
import { UilFolder } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import Playlists from "../Components/Playlists";

const homeBtn = <UilEstate />;
const musicBtn = <UilMusic />;
const folderBtn = <UilFolder />;
const artistBtn = <UilUsersAlt />;
const likeBtn = <UilHeart />;

function Sidebar() {
  return (
    <div className="lg:mt-12 lg:block  md:hidden bg-gray-900 z-40">
      <h1 className="text-gray-600 pl-4 mb-3 tracking-widest cursor-default font-semibold text-lg">
        MUSIC
      </h1>
      <NavLink to="/">
        <SideButtons icon={homeBtn} text={"Home"} />
      </NavLink>
      <NavLink to="/songs">
        <SideButtons icon={musicBtn} text={"Songs"} />
      </NavLink>
      <NavLink to="/albums">
        <SideButtons icon={folderBtn} text={"Albums"} />
      </NavLink>
      <NavLink to="/artists">
        <SideButtons icon={artistBtn} text={"Artists"} />
      </NavLink>
      <NavLink to="/liked">
        <SideButtons icon={likeBtn} text={"Liked"} />
      </NavLink>

      <Playlists />
    </div>
  );
}

export default Sidebar;
