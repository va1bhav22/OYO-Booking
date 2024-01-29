import React from "react";
import { map } from "../../images";

import { Link } from "react-router-dom";

const CountryBranches = () => {
  return (
    <div className="bg-[#f3f5f7] py-10 flex gap-16 items-center">
      <img src={map} alt="" className="w-1/2 object-contain" />
      <div className="w-1/2 flex flex-col gap-y-10">
        <h1 className="text-2xl font-semibold">
          There's an OYO around. Always.
        </h1>
        <p className="text-gray-400">
          More Destinations. More Ease. More Affordable.
        </p>
        <div className="flex gap-9 items-center">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-semibold">35+</h1>
            <p className="text-gray-400 text-sm">Countries</p>
          </div>
          <div className="h-[65px] w-[1px] bg-gray-400 rotate-[30deg]"></div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-semibold">174,000+</h1>
            <p className="text-gray-400 text-sm">Hotels & Homes</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-6">
          {countryData?.map((item) => (
            <Link to={item?.link} key={item?.id}>
              <div className="flex items-center gap-3 font-medium tracking-wide">
                <div className={`h-2 w-2 rounded-full ${item?.color}`}></div>
                <p>{item?.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryBranches;

const countryData = [
  {
    id: 1,
    title: "Indonesia",
    link: "https://www.oyorooms.com/id/",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Malaysia",
    link: "https://www.oyorooms.com/my/",
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Denmark",
    link: "https://www.dancenter.dk/",
    color: "bg-yellow-600",
  },
  {
    id: 4,
    title: "US",
    link: "https://www.oyorooms.com/us/",
    color: "bg-sky-600",
  },
  {
    id: 5,
    title: "UK",
    link: "https://www.belvilla.co.uk/",
    color: "bg-pink-500",
  },
  {
    id: 6,
    title: "Netherlands",
    link: "https://www.belvilla.nl/",
    color: "bg-blue-500",
  },
];
