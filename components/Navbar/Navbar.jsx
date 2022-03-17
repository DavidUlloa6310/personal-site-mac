import React from "react";

import NavItem from "./NavItem";
import PixelApple from "../icons/PixelApple";
import MiniMac from "../icons/MiniMac";

import {
  filePopupData,
  editPopupData,
  viewPopupData,
  labelPopupData,
  specialPopupData,
} from "../../utils/utils";

function Navbar(props) {
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-between h-16 sm:h-10 w-full bg-white absolute top-0 left-0 border-b-2 border-black font-chicago text-xs sm:text-base z-10">
      <ol className="flex flex-row justify-center items-center sm:ml-6">
        <NavItem>
          <PixelApple className=" h-5 w-5"></PixelApple>
        </NavItem>
        <NavItem data={filePopupData}>File</NavItem>
        <NavItem data={editPopupData}>Edit</NavItem>
        <NavItem data={viewPopupData}>View</NavItem>
        <NavItem data={labelPopupData}>Label</NavItem>
        <NavItem data={specialPopupData}>Special</NavItem>
      </ol>
      <ol className="flex flex-row justify-center items-center sm:mr-6">
        <NavItem>?</NavItem>
        <NavItem>
          <MiniMac className="h-10 w-10"></MiniMac>
        </NavItem>
      </ol>
    </div>
  );
}

export default Navbar;
