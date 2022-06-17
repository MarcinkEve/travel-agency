import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <p>Header</p>
      </Link>
    </>
  );
};

export default Header;
