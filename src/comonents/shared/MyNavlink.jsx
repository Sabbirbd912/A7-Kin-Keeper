import React from "react";
import { NavLink } from "react-router";

const MyNavlink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `font-semibold ${isActive ? "bg-[#2a6854] text-white" : "text-gray-700"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavlink;
