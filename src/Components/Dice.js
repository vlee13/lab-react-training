import React from 'react';
import { useState } from 'react';

const Dice = () => {
  let [img, setImg] = useState(diceObj[random()]);

  let diceObj = {
    empty: 'img/dice-empty.png',
    1: 'img/dice1.png',
    2: 'img/dice2.png',
    3: 'img/dice3.png',
    4: 'img/dice4.png',
    5: 'img/dice5.png',
    6: 'img/dice6.png',
  };

  function random() {
    return Math.floor(Math.random() * 6 + 1);
  }

  return (
    <div>
      <img
        alt="dice"
        src={diceObj[img]}
        onClick={() => {
          setImg(diceObj['empty']);
          setTimeout(() => {
            setImg(diceObj[random()]);
          }, 1000);
        }}
      />
    </div>
  );
};

export default Dice;
