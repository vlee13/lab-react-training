import React from 'react';

const IdCard = (props) => {
  return (
    <div>
      <p>
        <img src={props.picture} />
      </p>
      <p>LastName={props.lastName}</p>
      <p>FirstName={props.firstName}</p>
      <p>Gender={props.gender}</p>
      <p>Height={props.height}</p>
      <p>Birth={props.birth}</p>
    </div>
  );
};

export default IdCard;
