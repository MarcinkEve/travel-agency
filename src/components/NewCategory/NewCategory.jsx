import React, { useState, useEffect } from "react";
import "./newCategory.scss";
import {
  getFromLocal,
  getFromLocalUnparsed,
  setToLocal,
} from "../../utils/utils";

const travelDirection = ["Italy", "Spain", "Greece", "Turkey"];
const travelTransport = ["Plain", "Bus", "Ship"];
const travelDuration = ["5d/4n", "8d/7n", "12d/11n"];

const NewCategory = () => {
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
  };

  useEffect(() => {
    const data = getFromLocalUnparsed("categ");
    if (data) {
      setData(getFromLocal("categ"));
    }
  }, []);

  useEffect(() => {
    setToLocal("categ", data);
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
                <option value={travelDirection[0]}>{travelDirection[0]}</option>
                <option value={travelDirection[1]}>{travelDirection[1]}</option>
                <option value={travelDirection[2]}>{travelDirection[2]}</option>
                <option value={travelDirection[3]}>{travelDirection[3]}</option>
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
                <option value={travelTransport[0]}>{travelTransport[0]}</option>
                <option value={travelTransport[1]}>{travelTransport[1]}</option>
                <option value={travelTransport[2]}>{travelTransport[2]}</option>
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
                <option value={travelDuration[0]}>{travelDuration[0]}</option>
                <option value={travelDuration[1]}>{travelDuration[1]}</option>
                <option value={travelDuration[2]}>{travelDuration[2]}</option>
              </select>
            </div>
          </div>
          <button type="submit" className="form__submitButton">
            Create
          </button>
        </form>
      </div>
      <div className="table-container">
        <h2 className="table-container--title">Created categories</h2>
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
      </div>
    </div>
  );
};

export default NewCategory;
