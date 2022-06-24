import React from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";

const Dropdown = ({ subCategories, dropdown, category }) => {
  return (
    <div className="dropdown__container">
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {subCategories.map((subCategory, index) => (
          <li key={index} className="category-items">
            <Link to={`categoryInfo?${category}=${subCategory.title}`}>
              {subCategory.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
