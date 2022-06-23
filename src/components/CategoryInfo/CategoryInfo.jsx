import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFromLocal } from "../../utils/utils";
import "./categoryInfo.scss";

const TABLEHEADING = [
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
      if (Object.keys(query).length) {
        const filtering = items.filter((el, i) => {
          const key = Object.keys(query)[0];
          const prop = query[key];
          // console.log("val", value[prop]);
          
          return el[key?.toLowerCase()] === prop;
        });
        console.log("filtering", filtering);
        setItem(filtering);
      }
    }
  }, [JSON.stringify(query)]);

  const handleSaveToPC = (jsonData) => {
    //////////
    const items = getFromLocal("data");
    if (items) {
      if (Object.keys(query).length) {
        const filtering = items.filter((el, i) => {
          const key = Object.keys(query)[0];
          const prop = query[key];
          // console.log("val", value[prop]);
          return el[key?.toLowerCase()] === prop;
        });
        
        //////////////
        
        const fileData = JSON.stringify(filtering);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "filename.txt";
        link.href = url;
        link.click();
        console.log("jsonData", jsonData);
        console.log("fileData", fileData);
      }
    }
  };

  const downloadData = () => {
    handleSaveToPC(JSON.parse(localStorage.getItem("data"), null, 4));
  };

  return (
    <>
      <div className="categoryInfo-wrapper">
        <h2 className="categoryInfo--title">
          User list according selected subcategory
        </h2>
        <button
          onClick={downloadData}
          type="button"
          className="user-form__container__header--buttons-button"
        >
          Download list
        </button>
        <table className="categoryInfo__table">
          <thead>
            <tr className="categoryInfo__table__body">
              {TABLEHEADING.map((c) => (
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
