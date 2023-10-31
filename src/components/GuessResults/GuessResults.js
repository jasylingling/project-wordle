import React from 'react';

function UserGuess({ userGuesses }) {
  return (
    <div className="guess-results">
      {userGuesses.map((guess, i) => (
        <p className="guess" key={i}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default UserGuess;
