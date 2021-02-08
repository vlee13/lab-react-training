import React from 'react';

const NumbersTable = (props) => {
  let result = [];

  for (let i = 1; i <= props.limit; i++) {
    let color = '';
    if (i % 2 === 0) {
      color = 'red';
    } else {
      color = 'white';
    }
    result.push(
      <div
        style={{
          backgroundColor: color,
          display: 'inline-block',
          height: '50px',
          width: '50px',
        }}
      >
        {i}
      </div>
    );
  }

  return <div>{result}</div>;
};

export default NumbersTable;
