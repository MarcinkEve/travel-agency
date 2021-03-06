import React, { useState, useRef, useEffect } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { categItems } from "../../data/categItems";
import Categories from "../Categories";

const Nav = ({ isNavExpanded, setIsNavExpanded }) => {
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
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [drop]);

  return (
    <div className={isNavExpanded ? "nav-container-expanded" : "nav-container"}>
      <ul className="nav__ul">
        <li
          className="nav__ul__li"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Link to="/newCategory">
            <p className="nav__ul__li--title">Create Category</p>
          </Link>
        </li>
        <li
          className="nav__ul__li"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Link to="/newUser">
            <p className="nav__ul__li--title">Create User</p>
          </Link>
        </li>
        <li className="nav__ul__li" onClick={() => setDrop((prev) => !prev)}>
          Categories list
        </li>
        <li className={`dropdown ${drop ? "show" : ""}`} ref={ref}>
          {categItems.map((category, i) => {
            return (
              <Link to="/categoryInfo" key={i}>
                {" "}
                <Categories
                  categItems={categItems}
                  isNavExpanded={isNavExpanded}
                  setIsNavExpanded={setIsNavExpanded}
                  category={category}
                  key={i}
                />
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
