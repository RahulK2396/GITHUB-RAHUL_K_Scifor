import React, { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDivide = () => {
    try {
      const num1 = parseInt(firstNumber);
      const num2 = parseInt(secondNumber);
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Please enter valid integers.');
      }
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      setResult(num1 / num2);
      setError('');
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dividing Two Integers</h1>
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <button onClick={handleDivide}>Divide</button>
      {error && <div style={{ color: 'black' }}>{error}</div>}
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
}

export default App;
