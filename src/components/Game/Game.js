import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [win, setWin] = React.useState('running');
  const [numGuesses, setNumGuesses] = React.useState(0);
  console.log({ userGuesses, win, numGuesses });

  if (numGuesses === 6) {
    setNumGuesses(0);
    setWin('lost');
  }

  return (
    <>
      <GuessResults
        setWin={setWin}
        userGuesses={userGuesses}
        answer={answer}
      />
      <GuessInput
        setUserGuesses={setUserGuesses}
        userGuesses={userGuesses}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
      />
      {win === 'won' && <HappyBanner numGuesses={numGuesses} />}
      {win === 'lost' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
