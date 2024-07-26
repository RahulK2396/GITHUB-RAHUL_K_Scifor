
import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';
import CounterControls from './CounterControls';
import './App.css';

function App() {
  return (
    <CounterProvider>
      <div className='css'>
        <h1>Counter Application</h1>
        <Counter />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}


export default App;
