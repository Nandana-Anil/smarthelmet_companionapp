import React, { useState } from 'react';

const PinCodeUI = () => {
  const [enteredPin, setEnteredPin] = useState('');
  const [isValidPin, setIsValidPin] = useState(true); // Initially set to true
  const correctPin = '1234'; // Change this to your desired PIN

  const handleDigitClick = (digit) => {
    if (enteredPin.length < 4) {
      setEnteredPin(enteredPin + digit);
    }
  };

  const handleDeleteClick = () => {
    if (enteredPin.length > 0) {
      setEnteredPin(enteredPin.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    if (enteredPin === correctPin) {
      setIsValidPin(true); // Set to true if PIN is correct
      // Do something when the PIN is correct, e.g., redirect to another page
    } else {
      setIsValidPin(false); // Set to false if PIN is incorrect
      // Do something when the PIN is incorrect, e.g., show an error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-500 rounded-md shadow-md flex-grow">
      <h2 className="text-lg font-bold mb-4">Enter PIN Code</h2>
      <div className="mb-4">
        <input type="password" value={enteredPin} readOnly className="w-full p-2 border border-gray-300 rounded-md focus:outline-none bg-slate-600" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit)} className="p-2 border border-gray-300 rounded-md focus:outline-none">{digit}</button>
        ))}
        <button onClick={handleDeleteClick} className="p-2 border border-gray-300 rounded-md focus:outline-none">Delete</button>
        <button onClick={handleSubmit} className="p-2 border border-gray-300 rounded-md focus:outline-none">Submit</button>
      </div>
      {!isValidPin && <p className="text-red-500 mt-2">PIN is incorrect. Please try again.</p>}
    </div>
  );
};

export default PinCodeUI;
