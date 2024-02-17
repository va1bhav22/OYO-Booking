import React from "react";
import { PublicLayout } from "../Layout";
import Header from "../components/hotelHeader/Header";

import { LuBadgePercent } from "react-icons/lu";
import Gallery from "../components/HotelGallery/Gallery";
import SiderBar from "../components/HotelGallery/SiderBar";
const Detail = () => {
  return (
    <PublicLayout title="">
      <div className="grid grid-cols-12 border  border-black">
        <div className="col-span-3 p-2 border border-red-400">
          <SiderBar />
        </div>
        <div className="col-span-9  p-2 border border-green-400">
          <Header />
          <hr className="py-3"></hr>
          <div className="flex items-center gap-5  border-l-4 border-yellow-600 w-96 my-3 py-6 px-5 ">
            <p>
              <LuBadgePercent className="bg-yellow-400 size-5 text-white rounded-full" />
            </p>
            <p className="text-sm text-gray-400">
              upto 75% off. Valid until 5th Feb 2024.
            </p>
          </div>
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
        </div>
      </div>
    </PublicLayout>
  );
};

export default Detail;
