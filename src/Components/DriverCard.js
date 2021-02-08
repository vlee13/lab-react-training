import React from 'react';

const DriverCard = (props) => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
      <br />
      <p>{props.rating}</p>
      <br />
      <p>
        {props.carModel} - {props.carPlate}
      </p>
    </div>
  );
};

export default DriverCard;
