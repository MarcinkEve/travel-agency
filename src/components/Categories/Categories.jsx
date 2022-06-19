import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Categories = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="menu-items">
      {menu.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {menu.title}{" "}
          </button>
          <Dropdown submenus={menu.submenu} dropdown={dropdown} />
        </>
      ) : (
        <div href="/#">{menu.title}</div>
      )}
    </div>
  );
};

export default Categories;
