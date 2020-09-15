import React from 'react';

const Greetings = (props) => {
  return (
    <div>
      if(props.lang === 'de')
      {<div>Hallo {props.children}</div>}
      else if (props.lang === 'fr')
      {<div>Bonjour {props.children}</div>}
    </div>
  );
};

export default Greetings;
