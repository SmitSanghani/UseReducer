import React, { useReducer } from "react";

const Counter = () => {
  // Reducer function
  const reducer = (state, action) => {
    if (action.type === "counter") {
      const newValue = state + action.payload;

      // Agar newValue 0 se kam ho jaye to 0 return karo
      if (newValue < 0) {
        return 0;
      }

      return newValue;
    } else {
      return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 10);

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch({ type: "counter", payload: 1 })}>
        +1
      </button>

      <button onClick={() => dispatch({ type: "counter", payload: -1 })}>
        -1
      </button>

      <button onClick={() => dispatch({ type: "counter", payload: 5 })}>
        +5
      </button>

      <button onClick={() => dispatch({ type: "counter", payload: -5 })}>
        -5
      </button>
    </div>
  );
};

export default Counter;
