import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { IoMdStopwatch } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import MyNavlink from "./MyNavlink";
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
                <MyNavlink to="/">
                  <IoHomeOutline /> Home
                </MyNavlink >
              }
            </li>
            <li>
              {
                <MyNavlink   to="/timeline">
                  {" "}
                  <IoMdStopwatch /> Timeline
                </MyNavlink>
              }
            </li>
            <li>
              { 
                <MyNavlink to="/stats">
                  {" "}
                  <IoStatsChartOutline />
                  Stats
                </MyNavlink>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
