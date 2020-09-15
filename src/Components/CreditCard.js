import React from 'react';

const CreditCard = (props) => {
  return (
    <div className="cc">
      <p>Type: {props.type}</p>
      <p>Number: {props.number}</p>
      <p>
        Expires on: {props.expMonth}, {props.expYear}
      </p>
      <p>Bank: {props.bank}</p>
      <p>Owner: {props.owner}</p>
      <p>BG Color: {props.bgColor}</p>
      <p>Color: {props.color}</p>
    </div>
  );
};

export default CreditCard;
