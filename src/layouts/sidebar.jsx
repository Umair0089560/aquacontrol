import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants";
import logoIcon from "@/assets/AQIKON.png";
import logoIcon2 from "@/assets/Group.png";
import { Search } from "lucide-react";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed, setCollapsed }, ref) => {
  return (
    <>
   
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300",
          collapsed ? "hidden" : "block"
        )}
        onClick={() => setCollapsed(true)}
      />

   
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-full bg-[#0A1529] text-gray-400 flex flex-col items-center transition-transform duration-300 md:hidden",
          collapsed ? "-translate-x-full" : "translate-x-0"
        )}
      >
       
        <div className="w-full flex items-center justify-between px-4 py-4">
          <img
            src={logoIcon}
            alt="Logo"
            className="w-[45px] h-[45px] md:block hidden rounded-full bg-cyan-400 p-2"
          />
          <div className="flex">
            <img
            src={logoIcon2}
            alt="Logo"
            className="w-[30px] h-[30px] block md:hidden p-2"
          />
             <p className="text-s text-[#23CBD8] mt-[.10rem]">aquacontrol</p>
          </div>
          <button
            onClick={() => setCollapsed(true)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>

     
        <div className="w-full px-4 mb-5">
          <div className="flex items-center bg-[#0D1B34] rounded-full px-3 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm placeholder:text-gray-400 outline-none bg-transparent text-white"
            />
          </div>
        </div>

   
        <div className="flex w-full flex-col gap-4 md:mt-0 mt-4 md:px-2">
          {navbarLinks.map((navbarLink) => (
            <nav key={navbarLink.title} className="w-full">
              {navbarLink.links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 p-3 mb-5 text-sm font-medium transition-all duration-300 border-r-0",
                      isActive
                        ? "bg-[#1E2A47] text-white border-l-4 border-[#00D1FF] h-[65px]"
                        : "text-gray-400 hover:bg-[#1E2A47] hover:text-white hover:border-l-4 hover:border-[#00D1FF]"
                    )
                  }
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          ))}
        </div>
      </aside>

      
      <aside
        className={cn(
          "hidden md:flex fixed z-[100] h-full bg-[#0A1529] text-gray-400 w-[240px] flex-col items-center transition-all duration-300"
        )}
      >
   
        <div className="flex items-center justify-center py-6 mb-5">
          <img
            src={logoIcon}
            alt="Logo"
            className="w-[67.26px] h-[67.26px] rounded-full bg-cyan-400 p-2 mt-4"
          />
        </div>


        <div className="flex w-full flex-col gap-4">
          {navbarLinks.map((navbarLink) => (
            <nav key={navbarLink.title} className="w-full">
              {navbarLink.links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 p-3 mb-5 text-sm font-medium transition-all duration-300 border-r-0",
                      isActive
                        ? "bg-[#1E2A47] text-white border-l-4 border-[#00D1FF] h-[65px]"
                        : "text-gray-400 hover:bg-[#1E2A47] hover:text-white hover:border-l-4 hover:border-[#00D1FF]"
                    )
                  }
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          ))}
        </div>
      </aside>
    </>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
