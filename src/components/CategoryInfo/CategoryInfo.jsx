import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFromLocal } from "../../utils/utils"

const CategoryInfo = ({ category = "direction", value = "Spain" }) => {
  const [item, setItem] = useState([]);

  const { search } = useLocation();

  const query = useMemo(
    () => Object.fromEntries(new URLSearchParams(search)),
    [search]
  );

  useEffect(() => {
    const items = getFromLocal("data");
    if (items) {
      if(Object.keys(query).length){
        const filtering = items.filter((el, i) => {
          const key = Object.keys(query)[0];
          const prop = query[key];
          console.log(value[prop]);
          console.log(el[key?.toLowerCase()])
          return el[key?.toLowerCase()] === prop;
        });
        console.log(filtering.length);
        setItem(filtering);
      }
    }
  }, [JSON.stringify(query)]);

  return (
    <>
      <div style={{ background: "red" }}>CategoryInfo</div>
      <button>getgetgetget</button>
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
