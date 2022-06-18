import React from "react";
import { useState, useEffect } from "react";
import CV from "../../../package.json";

const NewCategory = () => {
  // const [contacts, setContacts] = useState(data);
  const [category, setAddFormData] = useState({
    yourCountry: " ",
    desiredPosition: "",
    seniority: "",
  });

 

  return (
    <div>
     NewCategory
    </div>
  );
  // return {
  //   <>
  //   <a href={CD} download className="btn">Download CD</a>
  //   // <button onClick={show}>NewCategory</button>;
  //   </>
  // }
};

export default NewCategory;
