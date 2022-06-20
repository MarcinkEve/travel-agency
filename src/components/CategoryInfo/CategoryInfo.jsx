import React from "react";
import { useState, useEffect } from "react";

const CategoryInfo = () => {
  const [item, setItem] = useState([]);
  const [itemCopy, setItemCopy] = useState([]);

  const get = () => {
    const items = JSON.parse(localStorage.getItem("data"));
    console.log("firstname", items[0].firstName);
    console.log("item", item);
    console.log("itemCopy", itemCopy);
    filter()
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setItem(items);
      setItemCopy(item);
      console.log("useeffect", items);
    }
  }, []);

  const filter = () => {
    itemCopy.map((el, i) =>
      el.direction === "Spain" ? console.log("YESS value", el.firstName) : console.log("NO value", el.firstName)
    );
  };

  return (
    <>
      <div style={{ background: "red" }}>CategoryInfo</div>
      <button onClick={get}>getgetgetget</button>
      <div>
        {item.map((el, i) => (
          <div key={i}>
            <strong>{el.firstName}</strong>
            <small>{el.lastName}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryInfo;
