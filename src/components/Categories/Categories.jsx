import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Categories = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);


  return (
    <div className="menu-items"  ref={ref}>
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
