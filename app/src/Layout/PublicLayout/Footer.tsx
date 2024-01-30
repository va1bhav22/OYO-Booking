import React, { useEffect, useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { appleStore, playStore } from "../../images";
const Footer = () => {
  return (
    <section className="bg-gray-400 w-full py-5">
      <section className=" public-container">
        <div className="flex justify-between items-center w-full ">
          <div className="flex gap-4 items-center text-white ">
            <h1 className=" text-4xl font-extrabold ">OYO</h1>
            <p className="text-2xl font-bold">
              World's leading chain of hotels and homes
            </p>
          </div>
          <div className="flex items-center  gap-4">
            <p className="text-2xl font-bold text-white">
              Join our network and grow your business!
            </p>
            <p className=" bg-white rounded-md shadow-md text-sm font-semibold py-4 px-5 flex items-center text-gray-500">
              <HiOutlineBuildingOffice2 />
              <span className="px-2"> List your property</span>
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col gap-9 my-5">
          <div className="border flex flex-col">
            <p>Download OYO app for exciting offers.</p>
            <div className="flex">
              <img src={appleStore} alt="play store" className="w-32" />
              <img src={playStore} alt="apple store" className="w-32" />
            </div>
          </div>
          <div className="border">2</div>
          <div className="border">3</div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
