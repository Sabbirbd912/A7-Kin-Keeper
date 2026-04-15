import React from "react";
import { NavLink } from "react-router";

const MyNavlink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `font-semibold ${isActive ? "bg-[#244D3F] text-white" : "text-gray-700"}`}
    >
         {children}
    </NavLink>
  );
};

export default MyNavlink;
