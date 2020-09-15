import React from 'react';

const Rating = (props) => {
  return (
    <div>

      let result = ''
          for(let i=0; i<=5; i++) {
            if(i<Math.round(Number(props.children))) {
                result += '★'
            } else {
                result += '☆'
            }
          }
          <p>{result}</p>
          
    </div>
  );
};

export default Rating;
