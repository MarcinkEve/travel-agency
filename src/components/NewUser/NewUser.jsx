import React from "react";
import { useState, useEffect } from "react";
import "./newUser.scss";
import Modal from "../Modal/Modal";
import { getFromLocal, setFromLocal } from "../../utils/utils";

const GENDER = ["Female", "Male", "Other"];
const DIRECTION = ["Italy", "Spain", "Greece", "Turkey"];
const TRANSPORT = ["Plain", "Bus", "Ship"];
const DURATION = ["5d/4n", "8d/7n", "12d/11n"];
// const TRANSPORT = ["Direction", "Stars", "Duration"];
// const DURATION2 = [3, 4, 5];

const NewUser = () => {
  // const [valuesList, setValuesList] = useState([]);

  // const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passw: "",
    age: "",
    gender: "",
    direction: "",
    transport: "",
    duration: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
      // console.log("values from set", values);
    };
  };

  let arr = [];
  const onSubmit = (event) => {
    event.preventDefault();
    // setError(validation(values));
    setIsSubmit(true);

    arr = getFromLocal("data") || [];
    arr.push(values);
    setFromLocal("data", arr);
    // localStorage.setItem("data", JSON.stringify(arr));
    console.log(arr);
    event.target.reset();
    setValues("");
  };

  useEffect(() => {
    if (isSubmit) {
      console.log("val", values);
    }
  }, [isSubmit, values]);

  //  =========== Prepare file for downloading ===========
  const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "filename.txt";
    link.href = url;
    link.click();
  };

  //  =========== Show users list ===========
  const [usdata, setDataLS] = useState("");

  const getData = () => {
    let data = getFromLocal("data");
    // let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    setDataLS(JSON.stringify(data, null, 4));
  };

  //  =========== Download list ===========
  const downloadData = () => {
    handleSaveToPC(JSON.parse(localStorage.getItem("data"), null, 4));
  };

  //  =========== Show modal ===========
  const [insert, setInsert] = useState(0);

  const insertCreate = (donIsert) => {
    setInsert(donIsert);
    getData();
  };

  //  =========== Inputs validation ===========

  // const validation = (val) => {
  //   const errors = {};
  //   if (!val.password) {
  //     errors.password = "Please enter password!";
  //   } else if (val.password.length < 7) {
  //     errors.password = "Password must contain at least 7 characters!";
  //   } else if (val.password.length > 25) {
  //     errors.password = "Seems that password is too long";
  //   }
  // };

  return (
    <>
      <div
      // style={{
      //   backgroundImage:
      //     "url(https://part.lt/img/c48728a54a9bd63bd7936d3653c14a30779.jpg)",
      // }}
      >
        {insert ? (
          <Modal usdata={usdata} insert={insert} setInsert={setInsert}></Modal>
        ) : null}
      </div>
      <div className="user-container">
        <div className="user-form__container">
          <div className="user-form__container__header">
            <h2 className="user-form__container__header--title">
              Fill to create new user
            </h2>
            <div className="user-form__container__header--buttons">
              <button
                onClick={insertCreate}
                type="button"
                className="user-form__container__header--buttons-button"
              >
                Show users list
              </button>

              <button
                onClick={downloadData}
                type="button"
                className="user-form__container__header--buttons-button"
              >
                Download list
              </button>
            </div>
          </div>
          <form onSubmit={onSubmit} className="user-form">
            <div className="user-form__side">
              <div className="user-form__input">
                <label className="user-form__input--title">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={set("firstName")}
                  required
                  className="user-form__input--field"
                ></input>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>
              <div className="user-form__input">
                <label className="user-form__input--title">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={set("lastName")}
                  required
                  className="user-form__input--field"
                ></input>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>
              <div className="user-form__input">
                <label className="user-form__input--title">Your e-mail</label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={set("email")}
                  required
                  className="user-form__input--field"
                ></input>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>
              <div className="user-form__input">
                <label className="user-form__input--title">Password</label>
                <input
                  type="password"
                  name="passw"
                  value={values.passw}
                  onChange={set("passw")}
                  required
                  className="user-form__input--field"
                ></input>
                {/* <p className="error-message">{error.passw}</p> */}
              </div>
              <div className="user-form__input">
                <label className="user-form__input--title">Age</label>
                <input
                  type="number"
                  name="age"
                  value={values.age}
                  onChange={set("age")}
                  required
                  min="0"
                  className="user-form__input--field"
                ></input>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>
            </div>
            <div className="user-form__side">
              <div className="user-form__input">
                <label className="user-form__input--title">Gender</label>
                <select
                  value={values.gender}
                  onChange={set("gender")}
                  required
                  className="user-form__input--select"
                >
                  <option value="">Choose...</option>
                  {GENDER.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                {/* <select value={gender} onChange={newGender}>
              <option value="choose">Choose...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select> */}
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>
              <div className="user-form__input">
                <label className="user-form__input--title">Direction</label>
                <select
                  value={values.direction}
                  onChange={set("direction")}
                  required
                  className="user-form__input--select"
                >
                  <option value="">Choose...</option>
                  {DIRECTION.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                {/* <select value={direction} onChange={newdirection}>
              <option value="direction">Choose...</option>
              <option value="plain">By plain</option>
              <option value="bus">By bus</option>
              <option value="ship">By ship</option>
            </select> */}
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>

              <div className="user-form__input">
                <label className="user-form__input--title">Transport</label>
                <select
                  value={values.transport}
                  onChange={set("transport")}
                  required
                  className="user-form__input--select"
                >
                  <option value="">Choose...</option>
                  {TRANSPORT.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>

              <div className="user-form__input">
                <label className="user-form__input--title">Duration</label>
                <select
                  value={values.duration}
                  onChange={set("duration")}
                  required
                  className="user-form__input--select"
                >
                  <option value="">Choose...</option>
                  {DURATION.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                {/* <p className="error-message">{error.firstName}</p> */}
              </div>

              <button type="submit" className="user-form__submitButton">Add user</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
