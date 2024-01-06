import { newNavMenues } from "../../hooks/Navmenu";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleMenuHover = (menuId: number) => {
    setHoveredMenu(menuId);
  };

  const handleMenuLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <section className="bg-[#f3f5f7]">
      <div className="public-container flex justify-between">
        {newNavMenues?.map((menu) => (
          <div
            key={menu.id}
            className="relative"
            onMouseEnter={() => handleMenuHover(menu.id)}
            onMouseLeave={handleMenuLeave}
          >
            <Link to={menu.path as any}>
              <div className="w-full px-3 py-2">
                <h5 className="text-sm text-gray-700 flex gap-1 items-center">
                  {menu.title}
                  <HiChevronDown
                    className={` transition-all duration-300 ease-in-out ${
                      menu.subMenus ? "block" : "hidden"
                    } ${hoveredMenu === menu.id ? "rotate-180" : "rotate-0"}`}
                  />
                </h5>
              </div>
            </Link>

            {menu.subMenus && hoveredMenu === menu.id && (
              <div className=" absolute top-full left-0 bg-white shadow-md  w-">
                {menu.subMenus.map((subMenu) => (
                  <Link
                    key={subMenu.id}
                    to={subMenu.path as any}
                    className="block py-1 hover:bg-gray-100"
                  >
                    {subMenu.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
