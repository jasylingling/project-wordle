import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ children = '', answer, setWin }) {
  let wins = [];
  const result = checkGuess(children, answer);
  if (result) {
    wins = result.filter((value) => value.status === 'correct');
  }

  if (wins.length >= 5) {
    setWin('won');
  }

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
