import React from "react";
import { NavLink } from "react-router-dom";

export default function SideLink({ title, path, img }) {
  return (
    <NavLink
      to={path}
      title={title}
      className="inline-flex items-center md:gap-3 lg:gap-4 pl-1 md:pl-6 lg:pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
    >
      <img src={img} alt="home" className="" />{" "}
      <p className="hidden lg:block">{title}</p>
    </NavLink>
  );
}
