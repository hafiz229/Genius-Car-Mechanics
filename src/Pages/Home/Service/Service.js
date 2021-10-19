import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { id, name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="text-center px-5">
        <h3 className="text-center">{name}</h3>
        <h5 className="text-center">Price: {price}</h5>
        <p>{description}</p>
        <Link to={`/booking/${id}`}>
          <button className="btn btn-primary mb-2">
            Book {name.toLowerCase()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
