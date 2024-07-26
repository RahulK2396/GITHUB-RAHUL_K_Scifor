
import React, { createContext, useContext, useReducer } from 'react';
const CounterContext = createContext();
const initialState = { count: 0 };


function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}


export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
