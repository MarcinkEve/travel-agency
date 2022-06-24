import React from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown, category }) => {
  return (
    <div className="dropdown__container">
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <Link to={`categoryInfo?${category}=${submenu.title}`}>
              {submenu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
