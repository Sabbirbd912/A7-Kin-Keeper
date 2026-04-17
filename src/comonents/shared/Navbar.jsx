import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { IoMdStopwatch } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import MyNavlink from "./MyNavlink";
const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
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
          <Link to="/" className="text-xl font-semibold">
            <span className="font-bold">Keen</span>Keen
          </Link>
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
