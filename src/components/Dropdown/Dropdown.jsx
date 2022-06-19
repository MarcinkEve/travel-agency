import React from "react";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href="/#">{submenu.title}</a>
        </li>
      ))}
    </ul>
//     <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
//     {submenus.map((submenu, index) => (
//      <Categories depthLevel={depthLevel} items={submenu} key={index} />
//     ))}
//    </ul>
  );
};

export default Dropdown;
