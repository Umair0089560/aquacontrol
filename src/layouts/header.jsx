import {
  Bell,
  ChevronLeft,
  ChevronDown,
  Search,
} from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import profileImg from "@/assets/profile-image.jpg";

export const Header = ({ collapsed, setCollapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles = {
    "/": "Dashboard",
    "/sensor": "Sensor",
    "/report": "Report",
    "/moniter": "Moniter",
    "/settings": "Settings",
  };

  const currentTitle = pageTitles[location.pathname] || "Name of facility";

  return (
    <>
      
      <header className="relative z-20 flex h-[64px] items-center justify-between bg-[#0A1529] px-4 shadow-md text-white">
   
        <div className="flex items-center gap-3">
         
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md md:hidden"
            onClick={() => setCollapsed(false)}
          >
            <span className="text-white text-2xl">&#9776;</span>
          </button>

        
          <button
            className="w-9 h-9 hidden md:flex items-center justify-center rounded-full bg-[#0D1B34] hover:bg-[#1E2A47]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={18} />
          </button>

          <h1 className="text-[22px] font-[500] hidden md:block">
            {currentTitle}
          </h1>
        </div>

      
        <div className="flex-1 justify-end px-4 hidden md:flex">
          <div className="flex items-center w-full max-w-md bg-white rounded-full px-3 py-1.5">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm text-black placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>

       
        <div className="flex items-center gap-4">
       
          <div className="relative">
            <button className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-md hover:bg-[#1E2A47]">
              <Bell size={18} />
            </button>
            <span className="absolute -top-1 -right-1 text-[10px] font-semibold bg-red-600 text-white h-4 w-4 rounded-full flex items-center justify-center">
              3
            </span>
          </div>

        
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 rounded-md px-2 py-1 hover:bg-slate-800 transition"
            >
              <img
                src={profileImg}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold">Cameron Williamson</p>
                <p className="text-xs text-gray-400">Company name</p>
              </div>
              <ChevronDown size={16} className="text-gray-300 hidden sm:block" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#0D1B34] rounded-lg shadow-md p-3 z-50">
                <button className="w-full text-left text-sm text-white hover:underline mb-2">
                  Settings
                </button>
                <button className="w-full text-left text-sm text-white hover:underline">
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

   
      <div className="flex items-center gap-3 px-4 py-3 bg-[#111e36] text-white md:hidden">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold">{currentTitle}</h1>
      </div>
    </>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
