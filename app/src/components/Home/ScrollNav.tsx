import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { FiMinus, FiUser } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoCaretDownOutline, IoLocateOutline } from "react-icons/io5";
import RecentSearch from "./RecentSearch";
import { homeHeader } from "../../images";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Icons from "../../assets/icons";
import { RiSunLine } from "react-icons/ri";

const languageArray = [
  {
    id: 1,
    title: "English",
    minLanguage: "English (UK)",
  },
  {
    id: 2,
    title: "Espanol",
    minLanguage: "Spanish",
  },
  {
    id: 3,
    title: "Bahasa",
    minLanguage: "Bahasa",
  },
  {
    id: 4,
    title: "عربي",
    minLanguage: "Arabic",
  },
];
const ScrollNav = () => {
  const [selectLanguage, setSelectLanguage] = useState<string>("English");
  const [openLang, setOpenLang] = useState(false);
  const [placeholder, setPlaceholder] = useState("Around Me");
  const [rooms, setRooms] = useState<number>(1);
  const [roomToggle, setRoomToggle] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { RangePicker } = DatePicker;
  const currentDate = dayjs();
  const tomorrowDate = currentDate.add(1, "day");
  const [roomDetails, setRoomDetails] = useState([
    {
      id: 1,
      guests: 1,
    },
  ]);

  const handlePlaceholder = () => {
    setPlaceholder("Search by city,hotel,or neighbor");
  };
  const handleBlur = () => {
    setPlaceholder("Around Me");
  };

  const handleDateRangeChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log("Start date:", start);
    console.log("End date:", end);
  };

  const handlePluse = (roomId: number) => {
    const updatedRooms = roomDetails.map((room) =>
      room.id === roomId && room.guests < 3
        ? { ...room, guests: room.guests + 1 }
        : room
    );
    setRoomDetails(updatedRooms as any);
  };

  const handleMinus = (roomId: number) => {
    const updatedRooms = roomDetails.map((room) =>
      room.id === roomId && room.guests > 1
        ? { ...room, guests: room.guests - 1 }
        : room
    );
    setRoomDetails(updatedRooms);
  };

  const handleAddRoom = () => {
    if (rooms < 6) {
      setRooms((prevRooms) => prevRooms + 1);

      const newRoomId = roomDetails.length + 1;
      setRoomDetails((prevRooms) => [
        ...prevRooms,
        {
          id: newRoomId,
          guests: 1,
        },
      ]);
    }
  };
  const handleDeleteRoom = () => {
    if (rooms > 1) {
      setRooms((prevRooms) => prevRooms - 1);
      const updatedRooms = [...roomDetails];
      updatedRooms.pop();
      setRoomDetails(updatedRooms);
    }
  };

  const calculateTotalGuests = () => {
    return roomDetails.reduce((total, room) => total + room.guests, 0);
  };

  const handleSearch = () => {};
  return (
    <div className="w-full h-full public-container   grid grid-cols-12 pt-['1px']">
      <div className=" relative col-span-3 border border-r-0  px-1  py-3  border-gray-300 ">
        <input
          type="text"
          placeholder={`${placeholder}`}
          className={`border-none outline-none  pl-2 h-full text-sm  w-[12rem] ${
            placeholder ? "input-placeholder" : ""
          }`}
          onClick={() => handlePlaceholder()}
          onBlur={handleBlur}
        />
        <div className="flex gap-1 items-center bg-slate-100 w-fit py-1 px-2 rounded-xl cursor-pointer absolute top-1/3 right-2">
          <div className="text-sm">
            <IoLocateOutline />
          </div>
          <p className="text-xs font-medium">Near me</p>
        </div>
      </div>
      <div className="col-span-2 border border-r-0  px-1 py-3 border-gray-300">
        <Space direction="vertical" size={12}>
          <RangePicker
            format="DD MMM YYYY"
            defaultValue={[currentDate, tomorrowDate]}
            renderExtraFooter={() => ""}
            className="ant-picker"
            // onChange={handleDateRangeChange}
          />
        </Space>
      </div>
      <div
        onClick={() => setRoomToggle(!roomToggle)}
        className="col-span-2 border border-r-0 px-1 py-3 border-gray-300 flex gap-1 justify-center cursor-pointer"
      >
        <p className="font-bold">{rooms} Room ,</p>
        <p className="font-bold">{calculateTotalGuests()} Guest</p>
      </div>
      {roomToggle && (
        <div className="absolute flex flex-col gap-6 top-[45%] right-[23%] bg-white rounded-md w-[20%] p-3 shadow-lg border">
          <div className="flex px-6 justify-between  gap-3 text-sm font-bold">
            <p>Rooms</p>
            <p>Guests</p>
          </div>
          {roomDetails.map((room) => (
            <div key={room.id} className="flex justify-between items-center">
              <p className="text-sm font-medium">{`Room ${room.id}`}</p>
              <div className="flex justify-between items-center gap-4">
                <div
                  onClick={() => handleMinus(room.id)}
                  className="border-2 p-1 text-lg"
                >
                  <FiMinus />
                </div>
                <p>{room.guests}</p>
                <div
                  onClick={() => handlePluse(room.id)}
                  className="border-2 p-1 text-lg "
                >
                  <GoPlus />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              onClick={() => handleDeleteRoom()}
              className="text-sm bg-red-600 px-3 py-1 text-white font-semibold rounded-sm"
            >
              Delete Room
            </button>
            <button
              onClick={() => handleAddRoom()}
              className="text-sm bg-[#1ab64f] px-3 py-1 text-white font-semibold rounded-sm"
            >
              Add Room
            </button>
          </div>
        </div>
      )}
      <div
        onClick={() => handleSearch()}
        className="col-span-1 border flex items-center justify-center rounded-r-md py-3  border-gray-300 bg-[#1ab64f] text-sm cursor-pointer font-bold text-white hover:bg-green-700 transition-all duration-300 ease-out  h-full text-center "
      >
        Search
      </div>
      <div
        onClick={() => setOpenLang(!openLang)}
        className=" col-span-1  flex justify-center items-center "
      >
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <div className="text-lg">
            <Icons.World />
          </div>
          <p className="text-xs font-semibold"> {selectLanguage}</p>
          <IoCaretDownOutline />
        </div>
        {openLang && (
          <div className="absolute bg-white shadow-lg border rounded-tr-lg rounded-b-xl bottom-[-9.3rem] px-4 py-3 z-10 grid grid-cols-2 cursor-pointer">
            {languageArray?.map((lang) => (
              <div
                onClick={() => setSelectLanguage(lang?.title)}
                className="flex items-center gap-2 p-3 hover:bg-slate-200/50"
              >
                <div
                  className={`text-xl ${
                    lang?.title === selectLanguage ? "text-green-400" : ""
                  }`}
                >
                  <FaCheck />
                </div>
                <div>
                  <p>{lang?.title}</p>
                  <p className=" text-xs">{lang?.minLanguage}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1 py-3 flex items-center justify-center">
        mode
      </div>
      <div className=" col-span-2 py-3 flex justify-center gap-2 items-center cursor-pointer">
        <div className="text-lg h-7 w-7 flex items-center justify-center  rounded-full bg-slate-200 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <FiUser />
        </div>
        <p className="text-sm font-semibold">Login / SignUp</p>
      </div>
    </div>
  );
};

export default ScrollNav;
