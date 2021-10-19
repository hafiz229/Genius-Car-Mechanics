import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <img
        className="p-5 container"
        style={{ width: "100%" }}
        src={notfound}
        alt=""
      />
      <br />
      <Link to="/">
        <button className="btn btn-primary mb-5">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
