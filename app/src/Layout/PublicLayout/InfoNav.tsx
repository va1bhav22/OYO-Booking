import { useState } from "react";
import Icons from "../../assets/icons";
import { midMenuList } from "../../hooks/Navmenu";
import { IoCaretDownOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
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
const InfoNav = () => {
  const [selectLanguage, setSelectLanguage] = useState<string>("English");
  const [openLang, setOpenLang] = useState(false);
  return (
    <div className="bg-white public-container grid grid-cols-12 items-center">
      <div className="font-extrabold text-4xl col-span-2">OYO</div>
      <div className="flex justify-between col-span-6">
        {midMenuList?.map((menu) => (
          <div key={menu?.id} className="flex items-center gap-2">
            <div className="text-3xl text-gray-500">{menu?.icon}</div>
            <div>
              <p className="text-sm font-semibold">{menu?.title}</p>
              <p className="text-xs">{menu?.minTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => setOpenLang(!openLang)} className=" col-span-2 py-7">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <div className="text-3xl">
            <Icons.World />
          </div>
          <p className="text-sm font-semibold"> {selectLanguage}</p>
          <IoCaretDownOutline />
        </div>
        {openLang && (
          <div className="absolute bg-white shadow-lg border rounded-tr-lg rounded-b-xl bottom-[-7.3rem] px-4 py-3 z-10 grid grid-cols-2 cursor-pointer">
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
      <div className=" col-span-2 py-6 flex justify-center gap-2 items-center cursor-pointer">
        <div className="text-lg h-7 w-7 flex items-center justify-center  rounded-full bg-slate-200 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <FiUser />
        </div>
        <p className="text-sm font-semibold">Login / SignUp</p>
      </div>
    </div>
  );
};

export default InfoNav;
