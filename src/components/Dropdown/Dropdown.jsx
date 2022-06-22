import React from "react";
import "./dropdown.scss";
import { Routes, Route, Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown, isNavExpanded, setIsNavExpanded, category }) => {
  return (
    <div className="dropdown__container">
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li
            // onClick={() => {
            //   setIsNavExpanded(!isNavExpanded);
            //   console.log("submenus", submenu);
            //   // console.log("dropdown", dropdown);
            //   // console.log("category", category);
            //   window.location.replace(`categoryInfo?${category}=${submenu.title}`)
            // }}
            key={index}
            className="menu-items"
          >
            <Link to={`categoryInfo?${category}=${submenu.title}`}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
