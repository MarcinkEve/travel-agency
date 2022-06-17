import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./layout.css";

const Layout = () => (
  <div>
    <Header />
    <div>
      <Nav />
      <Outlet/>
    </div>
    <Footer />
  </div>
);

export default Layout;
