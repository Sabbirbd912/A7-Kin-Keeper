import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { IoMdStopwatch } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import MyNavlink from "./MyNavlink";
const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">KeenKeeper</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {
                <MyNavlink to="/">
                  <IoHomeOutline /> Home
                </MyNavlink>
              }
            </li>
            <li>
              {
                <MyNavlink to="/timeline">
                  <IoMdStopwatch /> Timeline
                </MyNavlink>
              }
            </li>
            <li>
              {
                <MyNavlink to="/stats">
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
