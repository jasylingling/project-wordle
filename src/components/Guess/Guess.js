import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ children = '', answer }) {
  const result = checkGuess(children, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={result ? `${result[num].status} cell` : 'cell'}
          key={num}
        >
          {children[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
