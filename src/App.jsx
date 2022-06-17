import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import NewUser from "./components/NewUser/NewUser";
import NewCategory from "./components/NewCategory/NewCategory";
// import UserCategories from "./components/UserCategories/UserCategories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/newCategory" element={<NewCategory />} />
          {/* <Route path="/userCategories" element={<UserCategories />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
