import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess/Guess';

function GuessResults({ userGuesses, answer, setWin }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess setWin={setWin} key={num} answer={answer}>
          {userGuesses[num]}
        </Guess>
      ))}
    </div>
  );
}

export default GuessResults;
