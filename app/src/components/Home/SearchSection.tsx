import React from "react";
import { homeHeader } from "../../images";

const SearchSection = () => {
  return (
    <div
      className="h-[250px] w-full border"
      style={{
        backgroundImage: `url('${homeHeader}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <div className=""></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchSection;
