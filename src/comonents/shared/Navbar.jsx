import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { IoMdStopwatch } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm" >
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Kin Keeper</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {
                <NavLink to="/">
                  <IoHomeOutline /> Home
                </NavLink>
              }
            </li>
            <li>
              {
                <NavLink to="/timeline">
                  {" "}
                  <IoMdStopwatch /> Timeline
                </NavLink>
              }
            </li>
            <li>
              {
                <NavLink to="/stats">
                  {" "}
                  <IoStatsChartOutline />
                  Stats
                </NavLink>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
