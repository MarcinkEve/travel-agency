import React from "react";
import { useState, useEffect } from "react";
import "./newCategory.scss";
import {
  getFromLocal,
  getFromLocalUnparsed,
  setFromLocal,
} from "../../utils/utils";

const DIRECTION = ["Italy", "Spain", "Greece", "Turkey"];
const TRANSPORT = ["Plain", "Bus", "Ship"];
const DURATION = ["5d/4n", "8d/7n", "12d/11n"];

const NewCategory = () => {
  const [notCreated, setNotCreated] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    direction: "",
    transport: "",
    duration: "",
  });

  const inputChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...inputValue };
    newFormData[fieldName] = fieldValue;
    setInputValue(newFormData);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = {
      direction: inputValue.direction,
      transport: inputValue.transport,
      duration: inputValue.duration,
    };
    const newdata = [...data, newCategory];
    setData(newdata);

    event.target.reset();
    console.log("newCategory", newCategory);
  };

  useEffect(() => {
    // const data = localStorage.getItem("categ");
    const data = getFromLocalUnparsed("categ");
    if (data) {
      setData(getFromLocal("categ"));
    }

    // const categ = getFromLocal("categ");
    // console.log(typeof categ)
    // if (Object.keys(categ).length > 0) {
    //   setNotCreated(!notCreated);
    // }
  }, []);

  useEffect(() => {
    setFromLocal("categ", data);
    // localStorage.setItem("categ", JSON.stringify(data));
  });

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-container--title">Fill to create a category</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form__content">
            <div className="form__content__input">
              <label className="form__content__input--label">Direction</label>
              <select
                name="direction"
                onClick={inputChange}
                className="form__content__input--select"
              >
                <option value="Choose">Choose...</option>
                <option value={DIRECTION[0]}>{DIRECTION[0]}</option>
                <option value={DIRECTION[1]}>{DIRECTION[1]}</option>
                <option value={DIRECTION[2]}>{DIRECTION[2]}</option>
                <option value={DIRECTION[3]}>{DIRECTION[3]}</option>
              </select>
            </div>

            <div className="form__content__input">
              <label className="form__content__input--label">Transport</label>
              <select
                name="transport"
                onClick={inputChange}
                className="form__content__input--select"
              >
                <option value="Choose">Choose...</option>
                <option value={TRANSPORT[0]}>{TRANSPORT[0]}</option>
                <option value={TRANSPORT[1]}>{TRANSPORT[1]}</option>
                <option value={TRANSPORT[2]}>{TRANSPORT[2]}</option>
              </select>
            </div>

            <div className="form__content__input">
              <label className="form__content__input--label">Duration</label>
              <select
                name="duration"
                onClick={inputChange}
                className="form__content__input--select"
              >
                <option value="Choose">Choose...</option>
                <option value={DURATION[0]}>{DURATION[0]}</option>
                <option value={DURATION[1]}>{DURATION[1]}</option>
                <option value={DURATION[2]}>{DURATION[2]}</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form__submitButton">
            Create
          </button>
        </form>
        {/* <div>
          <div>
            <label>
              <h3>Filter</h3>
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
          </div>
        </div> */}
      </div>
      <div className="table-container">
        <h2 className="table-container--title">Created categories</h2>
        {/* {notCreated ? ( */}
        <table className="table">
          <thead>
            <tr className="table__body">
              <th className="table__body__heading">No</th>
              <th className="table__body__heading">Direction</th>
              <th className="table__body__heading">Transport</th>
              <th className="table__body__heading">Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cat, i) => (
              <tr key={i} className="table__body">
                <td className="table__body__data">{++i}</td>
                <td className="table__body__data">{cat.direction}</td>
                <td className="table__body__data">{cat.transport}</td>
                <td className="table__body__data">{cat.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ) : ( */}
        {/* <div>No categories created</div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default NewCategory;
