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
} from "../../utils/NavData";

function Navbar(props) {
  return (
    <div
      id={props.id}
      className="z-10 flex h-16 w-full flex-row flex-wrap justify-start border-b-2 border-black bg-white font-chicago text-xs sm:h-10 sm:text-base"
    >
      <ol className="flex flex-row items-center justify-center sm:ml-6">
        <NavItem>
          <PixelApple className=" h-5 w-5"></PixelApple>
        </NavItem>
        <NavItem data={filePopupData}>File</NavItem>
        <NavItem data={editPopupData}>Edit</NavItem>
        <NavItem data={viewPopupData}>View</NavItem>
        <NavItem data={labelPopupData}>Label</NavItem>
        <NavItem data={specialPopupData}>Special</NavItem>
      </ol>
      {/* <ol className="flex flex-row justify-center items-center sm:mr-6">
        <NavItem>?</NavItem>
        <NavItem>
          <MiniMac className="h-10 w-10"></MiniMac>
        </NavItem>
      </ol> */}
    </div>
  );
}

export default Navbar;
