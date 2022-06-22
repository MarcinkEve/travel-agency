import React from "react";
import "./dropdown.scss";

const Dropdown = ({ submenus, dropdown, isNavExpanded, setIsNavExpanded }) => {
  return (
    <div className="dropdown__container">
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            key={index}
            className="menu-items"
          >
            <a href="/#">{submenu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
