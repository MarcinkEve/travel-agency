import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <svg className="header__title--svg">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <p className="header__title"> Travellers</p>
      </div>
    </>
  );
};

export default Header;
