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
      <button style={{ backgroundColor: `${color[random]}` }} onClick={counter}>
        {count} Likes
      </button>
      0 Likes
    </div>
  );
};

export default LikeButton;
