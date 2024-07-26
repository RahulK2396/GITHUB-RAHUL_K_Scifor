
import React from 'react';
import { useCounter } from './CounterContext';

const CounterControls = () => {
  const { dispatch } = useCounter();
  return (
    <div style={styles.controls}>
      <button onClick={() => dispatch({ type: 'INCREMENT' })} style={styles.button}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={styles.button}>-</button>
    </div>
  );
};

const styles = {
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: '1.5em',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default CounterControls;
