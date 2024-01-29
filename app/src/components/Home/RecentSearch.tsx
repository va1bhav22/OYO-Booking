import React from "react";

const RecentSearch = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <p className="text-white text-lg  font-semibold">continue Your Search</p>
      <div className="flex gap-4 ">
        {recentSearchData?.map((item) => (
          <div className="text-white text-sm font-semibold cursor-pointer border-2 rounded-md  border-white py-2 px-3">
            <div key={item?.id} className="flex gap-1 ">
              <p className="tracking-wide">{item?.city} .</p>
              <p
                className={`tracking-wide ${item?.id > 2 ? "hidden" : "block"}`}
              >
                {item?.startDate}-{item?.endDate} |
              </p>
              <p className={` ${item?.id > 2 ? "hidden" : "block"}`}>
                {item?.guest}
              </p>
            </div>
            <p className="tracking-wide">{item?.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;

const recentSearchData = [
  {
    id: 1,
    city: "Bhubaneswar",
    guest: "1",
    startDate: "31 Jan",
    user: "Guest",
    endDate: "18 Feb",
  },
  {
    id: 2,
    city: "Bangalore",
    guest: "2",
    startDate: "31 Feb",
    user: "Guest",
    endDate: "18 Jun",
  },
  {
    id: 3,
    city: "Around me",
    guest: "2",
    startDate: "31 Feb",
    user: "Guest",
    endDate: "18 Jun",
  },
  {
    id: 4,
    city: "Paharganj",
    guest: "2",
    startDate: "31 Feb",
    user: "Guest",
    endDate: "18 Jun",
  },
];
