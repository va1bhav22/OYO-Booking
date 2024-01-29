import React from "react";
import { banner1, banner2, fire } from "../../images";

const BannerSection = () => {
  return (
    <div className="public-container pt-12 pb-8 flex flex-col gap-16">
      <img src={banner1} alt="banner1" loading="lazy" />
      <img src={banner2} alt="banner2" loading="lazy" />
      <div className="w-full border rounded-lg py-4  px-7 flex  justify-between border-gray-300">
        <div className="flex gap-10 items-center">
          <div className="p-4 flex justify-center items-center rounded-full h-[60px] w-[60px] bg-[#ffefd6]">
            <img src={fire} alt="fire img" loading="lazy" className="h-10 " />
          </div>
          <div className="">
            <p className="font-extrabold text-xl">
              Get access to exclusive deals
            </p>
            <p>Only the best deals reach your inbox</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <fieldset className="border border-gray-400 rounded-sm pb-2 pt-1 px-3 ">
            <legend className="text-xs font-medium text-gray-500 px-1 ">
              Your email
            </legend>
            <input
              type="text"
              placeholder="e.g, john@email.com"
              className="border-none outline-none py-1 w-[300px]"
            />
          </fieldset>
          <button className="bg-[#ee2a24] w-full text-sm h-[50px]  px-8 rounded-lg text-white font-semibold">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
