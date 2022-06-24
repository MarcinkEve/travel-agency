import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getFromLocal } from "../../utils/utils";
import "./categoryInfo.scss";

const tableHeading = [
  "No",
  "First Name",
  "Last name",
  "Age",
  "E-mail",
  "Gender",
  "Direction",
  "Transport",
  "Duration",
];

const CategoryInfo = () => {
  const [item, setItem] = useState([]);

  const { search } = useLocation();

  const query = useMemo(
    () => Object.fromEntries(new URLSearchParams(search)),
    [search]
  );

  useEffect(() => {
    const items = getFromLocal("data");
    if (items) {
      if (Object.keys(query).length) {
        const filtering = items.filter((el, i) => {
          const key = Object.keys(query)[0];
          const prop = query[key];

          return el[key?.toLowerCase()] === prop;
        });
        setItem(filtering);
      }
    }
  }, [query]);

  return (
    <>
      <div className="categoryInfo-wrapper">
        <h2 className="categoryInfo--title">
          User list according selected subcategory
        </h2>
        <table className="categoryInfo__table">
          <thead>
            <tr className="categoryInfo__table__body">
              {tableHeading.map((c) => (
                <th key={c} className="categoryInfo__table__body__heading">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.map((el, i) => (
              <tr key={i} className="categoryInfo__table__body">
                <td className="categoryInfo__table__body__data">{++i}</td>
                <td className="categoryInfo__table__body__data">
                  {el.firstName}
                </td>
                <td className="categoryInfo__table__body__data">
                  {el.lastName}
                </td>
                <td className="categoryInfo__table__body__data">{el.age}</td>
                <td className="categoryInfo__table__body__data">{el.email}</td>
                <td className="categoryInfo__table__body__data">{el.gender}</td>
                <td className="categoryInfo__table__body__data">
                  {el.direction}
                </td>
                <td className="categoryInfo__table__body__data">
                  {el.transport}
                </td>
                <td className="categoryInfo__table__body__data">
                  {el.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryInfo;
