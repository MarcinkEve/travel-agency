import React from "react";
import { useState, useEffect } from "react";

const DIRECTION = ["Italy", "Spain", "Greece", "Turkey"];
const TRANSPORT = ["By plain", "By bus"];
const DURATION = ["5d/4n", "8d/7n", "12d/11n"];

const NewCategory = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    direction: "",
    transport: "",
    duration: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...inputValue };
    newFormData[fieldName] = fieldValue;
    setInputValue(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      direction: inputValue.direction,
      transport: inputValue.transport,
      duration: inputValue.duration,
    };
    const newdata = [...data, newContact];

    // newdata.find((el) => {
    //   if (
    //     el.direction !== inputValue.direction &&
    //     el.transport !== inputValue.transport &&
    //     el.duration !== inputValue.duration
    //   ) {
    //     return setData(newdata);
    //   }
    //   alert("This category already exists!");
    //   return newdata;
    // });

    setData(newdata);
    event.target.reset();
    console.log("newdata", newdata);
  };

  useEffect(() => {
    const data = localStorage.getItem("categ");
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categ", JSON.stringify(data));
  });
  // const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <div>
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <div>
              <label>
                <h3>Direction</h3>
              </label>
              <select name="direction" onClick={handleAddFormChange}>
                <option value="Choose">Choose...</option>
                <option value={DIRECTION[0]}>{DIRECTION[0]}</option>
                <option value={DIRECTION[1]}>{DIRECTION[1]}</option>
                <option value={DIRECTION[2]}>{DIRECTION[2]}</option>
                <option value={DIRECTION[3]}>{DIRECTION[3]}</option>
              </select>
            </div>
            <div>
              <label>
                <h3>Transport</h3>
              </label>
              <select name="transport" onClick={handleAddFormChange}>
                <option value="Choose">Choose...</option>
                <option value={TRANSPORT[0]}>{TRANSPORT[0]}</option>
                <option value={TRANSPORT[1]}>{TRANSPORT[1]}</option>
              </select>
            </div>
            <div>
              <label>
                <h3>Duration</h3>
              </label>
              <select name="duration" onClick={handleAddFormChange}>
                <option value="Choose">Choose...</option>
                <option value={DURATION[0]}>{DURATION[0]}</option>
                <option value={DURATION[1]}>{DURATION[1]}</option>
                <option value={DURATION[2]}>{DURATION[2]}</option>
              </select>
            </div>
          </div>
          <button type="submit">Create</button>
          <div></div>
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
      <table>
        <thead>
          <tr>
            <th>Direction</th>
            <th>Transport</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data
            // .filter((val) => {
            //   if (searchItem === "") {
            //     return val;
            //   } else if (
            //     val.direction
            //       // .toLowerCase()
            //       .includes(searchItem.toLowerCase()) ||
            //     val.transport
            //       // .toLowerCase()
            //       .includes(searchItem.toLowerCase()) ||
            //     val.duration.toLowerCase().includes(searchItem.toLowerCase())
            //   ) {
            //     return val;
            //   }
            // })
            .map((contact, i) => (
              <tr key={i}>
                <td>{contact.direction}</td>
                <td>{contact.transport}</td>
                <td>{contact.duration}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewCategory;
