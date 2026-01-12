import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { adminNavigation } from "../utils";
import classNames from "classnames";

const Sidebar = ({ isProfileLayout = false }) => {
  const pathName = useLocation().pathname;
  const { user } = useSelector((state) => state.auth);
  const sideBarLayout = adminNavigation;

  return (
    <div className="flex grow flex-col gap-y-7 overflow-y-auto bg-gray-800 px-6 pb-4">
      <div className="flex h-16 shrink-0 gap-x-3 pt-2">
        <FaTachometerAlt className="h-8 w-8 text-indigo-500" />
        <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-4" role="list">
          {sideBarLayout.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={classNames(
                  pathName === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-blue-600 hover:text-white",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon className="text-2xl" aria-hidden="true" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
