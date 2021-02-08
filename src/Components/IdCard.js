import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idcard">
      <div className="idpic">
        <img src={props.picture} alt="idpic" />
      </div>
      <div className="idinfo">
        <div>
          <b>LastName:</b>
          {props.lastName}
        </div>
        <div>
          <b>FirstName:</b>
          {props.firstName}
        </div>
        <div>
          <b>Gender:</b>
          {props.gender}
        </div>
        <div>
          <b>Height:</b>
          {props.height}
        </div>
        <div>
          <b>Birth:</b>
          {props.birth}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
