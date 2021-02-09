import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="driverCard">
      <div>
        <img src={props.img} alt="drivercard" />
      </div>
      <div>
        <p>
          <h2>{props.name}</h2>
        </p>
        <p>
          <Rating>{props.rating}</Rating>
        </p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
