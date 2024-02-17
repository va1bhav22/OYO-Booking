import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-9">
        <div className="col-span-3">images</div>
        <div className="col-span-6">
          <div className="grid grid-rows-3">
            <div className="row-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-xl">
                    Super OYO Mn Residency Near Ragigudda Sri Prasanna
                    Anjaneyaswamy Temple
                  </p>
                  <div className="flex items-center gap-2">
                    <p>
                      Madiwala, South Zone, Bangalore South, Bangalore Urban,
                      560034, Bangalore
                    </p>
                    <p>
                      <FaMapMarkerAlt className="text-red-500" />
                    </p>
                    <p>1.2 Km</p>
                  </div>
                </div>
                <div className="w-36">
                  <p className="text-xs flex gap-1 text-red-500 items-start">
                    {" "}
                    <FaFire />
                    24 people booked this hotel today
                  </p>
                </div>
              </div>
            </div>
            <div className="row-span-1 ">
              <div className="flex flex-col items-start ">
                <div className="flex items-center gap-3 text-sm font-thin">
                  <p className="flex items-center gap-1 bg-green-500 rounded-sm text-white px-1 py-1 ">
                    4.5 <FaStar className="text-white text-xs" />
                  </p>
                  <p className="text-xs">(886 Ratings)</p>
                  <p className="text-xs">. Excellent</p>
                </div>
                <div className="flex items-center gap-4 my-2 font-thin ">
                  <p className="flex items-center gap-1">
                    <IoCheckmarkCircleOutline className="text-2xl" />
                    Doctor on call
                  </p>
                  <p className="flex items-center gap-1">
                    <IoCarSportOutline className="text-2xl" />
                    Parking facility
                  </p>
                  <p className="flex items-center gap-1">
                    <IoCheckmarkCircleOutline className="text-2xl" />
                    Reception
                  </p>
                  <p>+ 15 more</p>
                </div>
              </div>
            </div>
            <div className="row-spam-1">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-3xl">₹771</p>
                    <p className="text-gray-400 line-through"> ₹3259</p>
                    <p className="text-yellow-400">71% off</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      + ₹142 taxes & fees · per room per night
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="py-2 px-3 border border-black font-semibold">
                    View Details
                  </p>
                  <button className="px-3 py-2 bg-green-500 text-white rounded-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 py-3"></hr>
    </div>
  );
};

export default Gallery;
