import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({isNavExpanded, setIsNavExpanded}) => {

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <svg className="header__logo--svg">
              <use xlinkHref="#logo"></use>
            </svg>
          </Link>
            <svg className="header__logo--hamburger" onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              // console.log("labas")
            }}>
              <use xlinkHref="#hamburger"></use>
            </svg>
          {/* <button
            className="header__logo--hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            MENU
          </button> */}
        </div>
        <p className="header__title"> Travellers</p>
      </div>
    </>
  );
};

export default Header;
