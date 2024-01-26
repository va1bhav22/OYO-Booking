import React, { useState } from "react";
import { homeHeader } from "../../images";
import { IoLocateOutline } from "react-icons/io5";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
const SearchSection = () => {
  const [placeholder, setPlaceholder] = useState("Around Me");
  const { RangePicker } = DatePicker;
  const currentDate = dayjs();
  const tomorrowDate = currentDate.add(1, "day");
  const handlePlaceholder = () => {
    setPlaceholder("Search by city,hotel,or neighbor");
  };
  const handleBlur = () => {
    setPlaceholder("Around Me");
  };

  return (
    <div
      className="h-[250px] w-full border flex items-center justify-center"
      style={{
        backgroundImage: `url('${homeHeader}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center bg-white w-[76%]  rounded-sm ">
        <div className="relative border-r border-gray-400">
          <input
            type="text"
            placeholder={`${placeholder}`}
            className={`border-none outline-none pl-4 py-5 w-[23rem] ${
              placeholder ? "input-placeholder" : ""
            }`}
            onClick={() => handlePlaceholder()}
            onBlur={handleBlur}
          />
          <div className="flex gap-1 items-center bg-slate-200/50 w-fit py-1 px-2 rounded-xl cursor-pointer absolute top-1/3 right-2">
            <div className="text-lg">
              <IoLocateOutline />
            </div>
            <p className="text-xs font-medium">Near me</p>
          </div>
        </div>

        <div className="px-3 border-r border-gray-400 py-5">
          <Space direction="vertical" size={12}>
            <RangePicker
              format="DD MMM YYYY"
              defaultValue={[currentDate, tomorrowDate]}
              renderExtraFooter={() => ""}
              className="ant-picker"
            />
          </Space>
        </div>
        <div className="border-r border-gray-400 h-full py-5">Roms</div>
        <p className="text-xs font-medium">Near me</p>
        <div>Search</div>
      </div>
    </div>
  );
};

export default SearchSection;
