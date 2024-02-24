import React from "react";
import { PublicLayout } from "../Layout";
import Header from "../components/hotelHeader/Header";
import { useQuery } from "@tanstack/react-query";
import { LuBadgePercent } from "react-icons/lu";
import Gallery from "../components/HotelGallery/Gallery";
import SiderBar from "../components/HotelGallery/SiderBar";

const fetchHotel = async () => {
  const response = await fetch("http://localhost:3003/api/v1/hotel/get-hotels");
  const data = await response.json();

  return data;
};
const Detail = () => {
  const {
    isLoading,
    data: hotelData,
    error,
  } = useQuery({
    queryKey: ["Hotels"],
    queryFn: fetchHotel,
  });

  return (
    <PublicLayout title="">
      <div className="grid grid-cols-12 border relative">
        <div className="col-span-3 p-2 border sticky top-0 overflow-y-scroll max-h-screen ">
          <SiderBar />
        </div>
        <div className="col-span-9  p-2">
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

          {hotelData?.data?.allHotels?.map((item: any) => (
            <Gallery
              key={item.id}
              isLoading={isLoading}
              error={error}
              item={item}
            />
          ))}
        </div>
      </div>
    </PublicLayout>
  );
};

export default Detail;
