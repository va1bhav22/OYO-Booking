import React, { useEffect, useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaPinterest } from "react-icons/fa";

import { appleStore, playStore } from "../../images";

const list1 = [
  {
    name: "About Us",
  },
  {
    name: "Teams / Careers",
  },
  {
    name: "Blogs",
  },
  {
    name: "Support",
  },
];
const list2 = [
  {
    name: "Official OYO Blog",
  },
  {
    name: "Investor Relations ",
  },
  {
    name: "OYO Circles",
  },
  {
    name: "OYO Frames",
  },
];

const list3 = [
  { name: "Terms and conditions" },
  { name: "Guest Policies" },
  { name: "Privacy Policy" },
  { name: "Trust And Safety" },
];
const list4 = [
  {
    name: "Cyber Security",
  },
  {
    name: "Cyber Security Awareness",
  },
  {
    name: "Responsible Disclosure",
  },
  {
    name: "Advertise your Homes",
  },
];

const HotelList1 = [
  { name: "Hotels near me" },
  { name: "Hotels in Goa" },
  { name: "Hotels in Puri" },
  { name: "Hotels in Mahabaleshwar" },
  { name: "Hotels in Jaipur" },
  { name: "Hotels in Shimla" },
  { name: "Hotels in Manali" },
  { name: "Hotels in Udaipur" },
  { name: "Hotels in Mussoorie" },
  { name: "Hotels in Pondicherry" },
  { name: "Hotels in Delhi" },
];

const HotelList2 = [
  { name: "Hotels in Mumbai" },
  { name: "Hotels in Nainital" },
  { name: "Hotels in Lonavala" },
  { name: "Hotels in Munnar" },
  { name: "Hotels in Bangalore" },
  { name: "Hotels in Mysore" },
  { name: "Hotels in Darjeeling" },
  { name: "Hotels in Mount Abu" },
  { name: "Hotels in Kodaikanal" },
  { name: "Hotels in Hyderabad" },
  { name: "Hotels in Pune" },
];
const HotelList3 = [
  { name: "Hotels in Chandigarh" },
  { name: "Hotels in Shirdi" },
  { name: "Hotels in Agra" },
  { name: "Hotels in Gangtok" },
  { name: "Hotels in Coorg" },
  { name: "Hotels in Chennai" },
  { name: "Hotels in Tirupati" },
  { name: "Hotels in Dalhousie" },
  { name: "Hotels in Haridwar" },
  { name: "Hotels in Kolkata" },
  { name: "Hotels in Ahmedabad" },
];
const HotelList4 = [
  { name: "Hotels in Shillong" },
  { name: "Hotels in Rishikesh" },
  { name: "Hotels in Varanasi" },
  { name: "Hotels in Gurgaon" },
  { name: "Hotels in Mandarmoni" },
  { name: "Hotels in Daman" },
  { name: "Hotels in Yercaud" },
  { name: "Hotels in Amritsar" },
  { name: "Hotels in Madurai" },
  { name: "Hotels in Coimbatore" },
  { name: "Hotels in Kasauli" },
];
const HotelList5 = [
  { name: "Hotels in Dehradun" },
  { name: "Travel Guide" },
  { name: "All Cities Hotels" },
  { name: "Coupons" },
  { name: "OYO Hotel UK" },
  { name: "OYO Hotel USA" },
  { name: "OYO Hotel Mexico" },
  { name: "OYO Hotel Brasil" },
  { name: "Hotels in Japan" },
  { name: "OYO Hotel Indonesia" },
  { name: "OYO Vacation Homes in Europe" },
];
const HotelList6 = [
  { name: "Homes in Scandinavia" },
  { name: "Homes in Southern Europe" },
  { name: "Belvilla Holiday Homes" },
  { name: "Traum Vacation Apartments" },
  { name: "Traum Holiday Homes" },
];

const Footer = () => {
  return (
    <section className=" bg-[#6d787d] w-full py-5  flex flex-col gap-5 ">
      <div className=" public-container flex justify-between items-center w-full ">
        <div className="flex gap-2 items-center text-white ">
          <h1 className=" text-4xl font-extrabold ">OYO</h1>
          <p className="text-[1.4rem] font-bold">
            World's leading chain of hotels and homes
          </p>
        </div>
        <div className="flex items-center  gap-2">
          <p className="text-[1.4rem] font-bold text-white">
            Join our network and grow your business!
          </p>
          <p className=" bg-white rounded-md shadow-md py-4 px-5 flex items-center ">
            <HiOutlineBuildingOffice2 className="text-2xl text-gray-400" />
            <span className="px-2  text-xs font-bold text-gray-700">
              List your property
            </span>
          </p>
        </div>
      </div>
      <hr />
      <section className="public-container flex flex-col gap-5 ">
        <div className="grid grid-cols-3">
          <div className=" flex flex-col gap-4 border-r">
            <p className="text-white text-sm">
              Download OYO app for exciting offers.
            </p>
            <div className="flex gap-4 ">
              <div className="flex items-center border border-black rounded-md bg-white py-1 px-2 gap-2">
                <img
                  src={appleStore}
                  alt="play store"
                  className="w-6 h-7 text-white"
                />
                <div className="">
                  <p className="font-semibold text-xs ">Download on the </p>
                  <p className="font-bold text-xl">App Store</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center  border border-black rounded-md bg-white py-1 px-2">
                  <img src={playStore} alt="App Store" className="w-6 mx-2" />
                  <div>
                    <p className="font-semibold text-xs">Get it on </p>
                    <p className="font-bold text-xl">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white text-sm  flex justify-around border-r">
            <div className="flex flex-col gap-3">
              {list1.map((item) => (
                <div className="" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {list2.map((item) => (
                <div className="" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="text-white text-sm  flex justify-around ">
            <div className="flex flex-col gap-3">
              {list3.map((item) => (
                <div className="" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {list4.map((item) => (
                <div className="" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-4">
          <h2 className=" font-bold text-xl text-white pl-4">OYO Hotels</h2>
          <div className="grid grid-cols-6">
            <div className="flex gap-5 justify-around text-white font-bold text-sm ">
              <div className="flex flex-col gap-3">
                {HotelList1.map((item) => (
                  <div className="cursor-pointer" key={item.name}>
                    <p className="hover:underline"> {item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex gap-5 justify-around text-white font-bold text-sm">
                <div className="flex flex-col gap-3">
                  {HotelList2.map((item) => (
                    <div className="cursor-pointer" key={item.name}>
                      <p className="hover:underline"> {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 justify-around text-white font-bold text-sm">
                <div className="flex flex-col gap-3">
                  {HotelList3.map((item) => (
                    <div className="cursor-pointer" key={item.name}>
                      <p className="hover:underline"> {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 justify-around text-white font-bold text-sm">
                <div className="flex flex-col gap-3">
                  {HotelList4.map((item) => (
                    <div className="cursor-pointer" key={item.name}>
                      <p className="hover:underline"> {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 justify-around text-white font-bold text-sm">
                <div className="flex flex-col gap-3">
                  {HotelList5.map((item) => (
                    <div className="cursor-pointer" key={item.name}>
                      <p className="hover:underline"> {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 justify-around text-white font-bold text-sm">
                <div className="flex flex-col gap-3">
                  {HotelList6.map((item) => (
                    <div className="cursor-pointer" key={item.name}>
                      <p className="hover:underline"> {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=""></hr>
        <div className=" flex justify-between items-center">
          <div className="flex gap-6 text-white text-2xl">
            <p>
              <FaFacebook />
            </p>
            <p>
              <RiInstagramFill />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <TbBrandYoutubeFilled />
            </p>
            <p>
              <FaPinterest />
            </p>
          </div>
          <div>
            <p className="text-white">2013-2022 © Oravel Stays Limited</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
