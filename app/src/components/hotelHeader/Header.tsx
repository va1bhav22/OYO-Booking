import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaSortDown } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <div className="flex flex-col mx-5">
          <p className="flex items-center  text-xs">
            India <MdOutlineKeyboardArrowRight /> Bangalore Hotels{" "}
            <MdOutlineKeyboardArrowRight /> Koramangala Hotels
          </p>
          <p className="py-2 font-bold text-xl">
            Hotels in Koramangala, Bangalore (159 OYOs)
          </p>
        </div>
        <div className="flex justify-between items-center  w-4/12 ">
          <div className=" flex items-center gap-6 ">
            <p className=" text-sm font-light">Map View</p>
            <div className="border w-12">box</div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-light">Sort By</p>
            <div className="border border-black w-44 text-left px-2 py-2 flex justify-between rounded-sm">
              <p>Popularity</p>
              <p>
                <FaSortDown />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
