import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/welcome">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/newUser">
            <p>New User</p>
          </Link>
        </li>
        <li>
          <Link to="/newCategory">
            <p>New Category</p>
          </Link>
        </li>
        <li>
          <Link to="/userCategories">
            <p>User Categories</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
