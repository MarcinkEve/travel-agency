import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import NewUser from "./components/NewUser/NewUser";
import NewCategory from "./components/NewCategory/NewCategory";
import Categories from "./components/Categories/Categories";
import CategoryInfo from "./components/CategoryInfo/CategoryInfo";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/welcome" element={<Welcome />} /> */}
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/newCategory" element={<NewCategory />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categoryInfo" element={<CategoryInfo />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
