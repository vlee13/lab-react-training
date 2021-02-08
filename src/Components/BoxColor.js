import React from 'react';

const BoxColor = (props) => {
  return (
    <div
      style={{
        width: '20vw',
        padding: '10px',
        border: '1px black solid',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
    </div>
  );
};

export default BoxColor;
