import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoLocateOutline } from "react-icons/io5";
import RecentSearch from "./RecentSearch";
import { homeHeader } from "../../images";
const SearchSection = () => {
  console.log(homeHeader);
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
    <div
      className=" h-[280px] w-full border flex flex-col items-center justify-center gap-6"
      style={{
        backgroundImage: `url('${homeHeader}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-3xl text-white">
        Over 174,000+ hotels and homes across 35+ countries
      </h1>
      <div className="  grid grid-cols-12  items-center bg-white w-[80%]  ">
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
              // onChange={handleDateRangeChange}
            />
          </Space>
        </div>
        <div
          onClick={() => setRoomToggle(!roomToggle)}
          // onBlur={() => setRoomToggle(false)}
          className="  col-span-3 cursor-pointer h-full py-5  flex gap-1 justify-center"
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
                    className="border-2 p-1 text-lg"
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
          className="py-5 bg-[#1ab64f] text-lg cursor-pointer font-bold text-white hover:bg-green-700 transition-all duration-300 ease-out col-span-2 h-full text-center "
        >
          Search
        </div>
      </div>
      <div className="w-full">
        <RecentSearch />
      </div>
    </div>
  );
};

export default SearchSection;
