import React from 'react';
import { useState } from 'react';

const LikeButton = () => {
  let [count, setCount] = useState(0);

  let color = ['blue', 'red', 'purple', 'green', 'yellow'];
  let random = Math.floor(Math.random() * color.length);

  function counter() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: `${color[random]}`,
          width: '15vw',
          height: '10vh',
          margin: '5px',
        }}
        onClick={counter}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
