import React, { useState } from "react";
import { homeHeader } from "../../images";
import { IoLocateOutline } from "react-icons/io5";
import { DatePicker, Space } from "antd";
import { FiMinus } from "react-icons/fi";
import dayjs from "dayjs";
const SearchSection = () => {
  const [placeholder, setPlaceholder] = useState("Around Me");
  const [rooms, setRooms] = useState<number>(1);
  const [guest, SetGuest] = useState<number>(1);
  const [roomToggle, setRoomToggle] = useState<boolean>(false);
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
      className=" h-[250px] w-full border flex items-center justify-center"
      style={{
        backgroundImage: `url('${homeHeader}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-12  items-center bg-white w-[80%]  ">
        <div className="relative col-span-4 h-full border-r border-gray-400 ">
          <input
            type="text"
            placeholder={`${placeholder}`}
            className={`border-none outline-none pl-4 py-5 w-[16.5rem] ${
              placeholder ? "input-placeholder" : ""
            }`}
            onClick={() => handlePlaceholder()}
            onBlur={handleBlur}
          />
          <div className="flex gap-1 items-center bg-slate-100 w-fit py-1 px-2 rounded-xl cursor-pointer absolute top-1/3 right-2">
            <div className="text-lg">
              <IoLocateOutline />
            </div>
            <p className="text-xs font-medium">Near me</p>
          </div>
        </div>

        <div className="px-3 border-r col-span-3 h-full border-gray-400 py-5">
          <Space direction="vertical" size={12}>
            <RangePicker
              format="DD MMM YYYY"
              defaultValue={[currentDate, tomorrowDate]}
              renderExtraFooter={() => ""}
              className="ant-picker"
            />
          </Space>
        </div>
        <div
          onClick={() => setRoomToggle(!roomToggle)}
          // onBlur={() => setRoomToggle(false)}
          className=" relative col-span-3 cursor-pointer h-full py-5  flex gap-1 justify-center"
        >
          <p className="font-bold">{rooms} Room ,</p>
          <p className="font-bold">{guest} Guest</p>
          {roomToggle && (
            <div className="absolute bottom-[-3rem] bg-white rounded-md w-full p-3 shadow-lg border">
              <div className="flex px-6 justify-between  gap-3 text-sm font-bold">
                <p>Rooms</p>
                <p>Guests</p>
              </div>
              <div>
                <p>Room 1</p>
                <div>
                  <div>
                    <FiMinus />
                  </div>
                  <p>{guest}</p>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="py-5 bg-[#1ab64f] text-lg cursor-pointer font-bold text-white hover:bg-green-700 transition-all duration-300 ease-out col-span-2 h-full text-center ">
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
