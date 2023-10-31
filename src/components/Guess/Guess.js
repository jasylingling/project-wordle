import React from 'react';

import { range } from '../../utils';

function Guess({ children = '' }) {
  console.log(children);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {children[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
