import React from 'react';

const Rating = (props) => {
  function stars() {
    let result = '';
    for (let i = 0; i <= 5; i++) {
      if (i < Math.round(Number(props.children))) {
        result += '★';
      } else {
        result += '☆';
      }
    }
    return result;
  }

  return <div>{stars}</div>;
};

export default Rating;
