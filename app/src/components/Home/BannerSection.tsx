import React from "react";
import { banner1, banner2 } from "../../images";

const BannerSection = () => {
  return (
    <div className="public-container pt-12 flex flex-col gap-16">
      <img src={banner1} alt="banner1" loading="lazy" />
      <img src={banner2} alt="banner2" loading="lazy" />
    </div>
  );
};

export default BannerSection;
