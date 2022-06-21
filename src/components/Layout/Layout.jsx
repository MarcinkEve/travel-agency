import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./layout.scss";

const Layout = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <Header
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <div className="content">
        <Nav
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
