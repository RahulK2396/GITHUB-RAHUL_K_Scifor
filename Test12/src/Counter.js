
import React from 'react';
import { useCounter } from './CounterContext';

const Counter = () => {
  const { state } = useCounter();
  return (
    <div style={styles.counter}>
      <h1>{state.count}</h1>
    </div>
  );
};

const styles = {
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    fontSize: '2em',
    margin: '20px 0',
  },
};

export default Counter;
