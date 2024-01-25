import { useState } from "react";
import Icons from "../../assets/icons";
import { midMenuList } from "../../hooks/Navmenu";
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
  const [selectLangauge, setSelectLanguage] = useState<string>("English");
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
      <div className="border col-span-2 py-7">
        <div className="">
          <Icons.World />
        </div>
        {openLang && (
          <div>
            {languageArray?.map((lang) => (
              <div>
                <div></div>
                <p>{lang?.title}</p>
                <p>{lang?.minLanguage}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border col-span-2 py-6"></div>
    </div>
  );
};

export default InfoNav;
