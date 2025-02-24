import React, { useState } from 'react';

function FormInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default FormInput;
