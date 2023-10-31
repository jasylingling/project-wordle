import React from 'react';

function GuessInput({ setUserGuesses, userGuesses }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(guess);
        const nextGuessInput = [...userGuesses, guess];
        setUserGuesses(nextGuessInput);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        title="Please enter exactly 5 characters from the alphabet :)"
        type="text"
        name="guess-input"
        id="guess-input"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GuessInput;
