import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Link to="/">
          <p className="header-title">Travelers joy</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
