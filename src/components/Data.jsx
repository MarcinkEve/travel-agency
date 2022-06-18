import React from "react";
import { Link } from "react-router-dom";

const Data = ({ usdata }) => {
  return (
    <div>
      <pre>{usdata}</pre>
      {/* <Link to="/">
        <p>Back to Home Page</p>
      </Link> */}
    </div>
  );
};

export default Data;
