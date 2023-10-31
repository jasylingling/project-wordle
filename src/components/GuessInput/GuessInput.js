import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        name="guess-input"
        id="guess-input"
        value={guess.toUpperCase()}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GuessInput;
