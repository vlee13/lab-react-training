import React from 'react';
import { useState } from 'react';

const ClickablePicture = (props) => {
  let [pic, setPic] = useState(true);

  return (
    <div>
      <img
        src={pic ? props.img : props.imgClicked}
        onClick={() => setPic(!pic)}
      />
    </div>
  );
};

export default ClickablePicture;
