import React from "react";
import { PublicLayout } from "../Layout";
import Header from "../components/hotelHeader/Header";

const Detail = () => {
  return (
    <PublicLayout title="">
      <div className="grid grid-cols-12 border  border-black">
        <div className="col-span-3 p-2 border border-red-400">1</div>
        <div className="col-span-9  p-2 border border-green-400">
          <Header />
        </div>
      </div>
    </PublicLayout>
  );
};

export default Detail;
