import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants";

import logoIcon from "@/assets/AQIKON.png"; // circular icon like in image
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full flex-col items-center bg-[#0A1529] text-gray-400 transition-all duration-300",
                collapsed ? "w-[70px]" : "w-[240px]"
            )}
        >
            {/* Logo */}
            <div className="flex items-center justify-center py-6 mb-5">
                <img
                    src={logoIcon}
                    alt="Logo"
                    className="w-[67.26px] h-[67.26px]] rounded-full bg-cyan-400 p-2 mt-4"
                />
            </div>

            {/* Navigation Links */}
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
                                          : "text-gray-400 hover:bg-[#1E2A47] hover:text-white hover:border-l-4 hover:border-[#00D1FF]",
                                        collapsed && "justify-center p-2"
                                      )
                                  }

                            >
                                <link.icon size={20} />
                                {!collapsed && <span>{link.label}</span>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
