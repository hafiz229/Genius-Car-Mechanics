import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="text-start px-5">
        <h3 className="text-center">{name}</h3>
        <h5 className="text-center">Price: {price}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
