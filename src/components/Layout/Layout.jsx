import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header";
import "./Layout.css";

const Layout = () => (
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
