import React from 'react';

const CreditCard = (props) => {
  return (
    <div
      className="cc"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <p>{props.type}</p>
      <p>Number: {props.number}</p>
      <p>
        Expires on: {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>Owner: {props.owner}</p>
    </div>
  );
};

export default CreditCard;
