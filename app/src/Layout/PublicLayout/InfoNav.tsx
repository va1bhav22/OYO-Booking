import { midMenuList } from "../../hooks/Navmenu";

const InfoNav = () => {
  return (
    <div className="bg-white public-container grid grid-cols-12">
      <div className="font-extrabold text-4xl col-span-3 border-2 border-red-400">
        OYO
      </div>
      <div className="flex col-span-6 border border-green-500">
        {midMenuList?.map((menu) => (
          <div key={menu?.id} className="flex items-center gap-2">
            <div className="text-4xl text-gray-500 ">{menu?.icon}</div>
            <div>
              <p className="text-sm font-medium">{menu?.title}</p>
              <p className="text-xs">{menu?.minTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border col-span-2 bg-red-400"></div>
      <div className="border col-span-1 bg-pink-400">amsbdkjsabk</div>
    </div>
  );
};

export default InfoNav;
