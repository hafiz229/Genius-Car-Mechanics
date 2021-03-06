import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://tranquil-beach-93933.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h2>{service.name} Details</h2>
      <div className="booking container d-lg-flex align-items-center justify-content-center shadow rounded p-3">
        <div className="col-lg-6">
          <img src={service.img} alt="" />
        </div>
        <div>
          <h3 className="text-center">{service.name}</h3>
          <h5 className="text-center">Price: {service.price}</h5>
          <p className="w-100">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
