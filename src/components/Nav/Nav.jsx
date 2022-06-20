import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { categItems } from "../categItems.js";
import Categories from "../Categories/Categories";

const Nav = () => {
  const [drop, setDrop] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (drop && ref.current && !ref.current.contains(event.target)) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [drop]);

  return (
    <div className="nav-container">
      <ul className="nav__ul">
        {/* <li>
          <Link to="/welcome">
            <p>Home</p>
          </Link>
        </li> */}
        <li className="nav__ul__li">
          <Link to="/newCategory">
            <p className="nav__ul__li--title">Create Category</p>
          </Link>
        </li >
        <li className="nav__ul__li">
          <Link to="/newUser">
            <p className="nav__ul__li--title">Create User</p>
          </Link>
        </li>
        <li className="nav__ul__li" onClick={() => setDrop((prev) => !prev)}>
          Categories list
        </li>
        <li className={`dropdown ${drop ? "show" : ""}`} ref={ref}>
          {categItems.map((menu, i) => {
            return (
              <Link to="/categoryInfo" key={i}>
                {" "}
                <Categories menu={menu} key={i} />
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
