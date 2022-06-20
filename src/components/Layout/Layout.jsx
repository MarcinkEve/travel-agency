import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./layout.scss";

const Layout = () => (
  <div>
    <Header />
    <div className="content">
      <Nav />
      <Outlet/>
    </div>
    <Footer />
  </div>
);

export default Layout;
