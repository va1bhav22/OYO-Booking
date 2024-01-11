import { newNavMenues } from "../../hooks/Navmenu";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import InfoNav from "./InfoNav";
const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const handleMenuHover = (menuId: number) => {
    setHoveredMenu(menuId);
  };

  const handleMenuLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <section className=" sticky top-0 w-full">
      <InfoNav />
      <div className="bg-[#f3f5f7]">
        <div className="public-container flex justify-between  ">
          {newNavMenues?.map((menu, index: number) => (
            <div
              key={menu.id}
              className="relative group"
              onMouseEnter={() => handleMenuHover(menu.id)}
              onMouseLeave={handleMenuLeave}
            >
              <Link to={menu.path as any}>
                <div className="w-full ">
                  <div
                    className={`text-sm text-gray-700 flex gap-1 items-center  px-3 py-2 transition-all duration-300 ease-in ${
                      hoveredMenu === menu.id ? "group-hover:bg-[#fffefe] " : ""
                    }`}
                  >
                    {menu.title}
                    <HiChevronDown
                      className={` transition-all duration-300 ease-in-out ${
                        menu.subMenus ? "block" : "hidden"
                      } ${
                        menu.subMenus && hoveredMenu === menu.id
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
              </Link>

              {menu.subMenus && hoveredMenu === menu.id && (
                <div
                  className={`absolute top-full ${
                    index >= newNavMenues.length - 3 ? "right-0" : "left-0"
                  } bg-white border shadow-sm rounded-b-lg rounded-tr-lg py-4  pl-6 w-64`}
                >
                  <p className="font-bold">Popular Localities</p>
                  {menu.subMenus.map((subMenu) => (
                    <Link
                      key={subMenu.id}
                      to={subMenu.path as any}
                      className="block py-1"
                    >
                      <p className="hover:text-mainColor"> {subMenu.title}</p>
                    </Link>
                  ))}
                  <div className="flex gap-2 items-center text-mainColor">
                    <p> All of {menu.title} </p>
                    <IoIosArrowForward />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
