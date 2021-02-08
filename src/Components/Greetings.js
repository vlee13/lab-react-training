import React from 'react';

const Greetings = (props) => {
  function greet(lang) {
    if (lang === 'de') {
      return 'Hallo';
    } else if (lang === 'es') {
      return 'Hola';
    } else if (lang === 'en') {
      return 'Hi';
    } else if (lang === 'fr') {
      return 'Bonjour';
    }
  }

  return (
    <div className="langs">
      {greet(props.lang)} {props.name}
    </div>
  );
};

export default Greetings;
