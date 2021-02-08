import React from 'react';
import { useState } from 'react';

const Carousel = (props) => {
  let [img, setImg] = useState(0);

  function left() {
    if (props.img[img - 1] === undefined) {
      setImg(0);
    } else {
      setImg(img - 1);
    }
  }

  function right() {
    if (props.imgs[img + 1] === undefined) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  }

  return (
    <div>
      <button onClick={left}>Left</button>
      <img src={props.imgs[img]} alt="peeps" />
      <button onClick={right}>Left</button>
    </div>
  );
};

export default Carousel;
