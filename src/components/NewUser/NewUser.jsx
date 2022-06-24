import React, { useState, useEffect } from "react";
import "./newUser.scss";
import Modal from "../Modal";
import { getFromLocal, setToLocal } from "../../utils/utils";

const userGender = ["Female", "Male", "Other"];
const travelDirection = ["Italy", "Spain", "Greece", "Turkey"];
const travelTransport = ["Plain", "Bus", "Ship"];
const travelDuration = ["5d/4n", "8d/7n", "12d/11n"];

const NewUser = () => {
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
    };
  };

  let arr = [];
  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);

    arr = getFromLocal("data") || [];
    arr.push(values);
    setToLocal("data", arr);
    event.target.reset();
    setValues("");
  };

  useEffect(() => {
    if (isSubmit) {
    }
  }, [isSubmit, values]);

  const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "filename.txt";
    link.href = url;
    link.click();
  };

  const [usdata, setDataLS] = useState("");

  const getData = () => {
    let data = getFromLocal("data");
    setDataLS(JSON.stringify(data, null, 4));
  };

  const downloadData = () => {
    handleSaveToPC(JSON.parse(localStorage.getItem("data"), null, 4));
  };

  const [insert, setInsert] = useState(0);

  const insertCreate = (donIsert) => {
    setInsert(donIsert);
    getData();
  };

  return (
    <>
      <div>
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
                  {userGender.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
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
                  {travelDirection.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
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
                  {travelTransport.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
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
                  {travelDuration.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="user-form__submitButton">
                Add user
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
