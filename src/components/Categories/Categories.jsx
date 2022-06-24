import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

const Categories = ({ category, isNavExpanded, setIsNavExpanded }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mouseup", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mouseup", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <div className="category-items" ref={ref}>
      {category.subCategory ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {category.title}{" "}
          </button>
          <Dropdown
            category={category.title}
            subCategories={category.subCategory}
            dropdown={dropdown}
            isNavExpanded={isNavExpanded}
            setIsNavExpanded={setIsNavExpanded}
          />
        </>
      ) : (
        <Link to="/#">{category.title}</Link>
      )}
    </div>
  );
};

export default Categories;
