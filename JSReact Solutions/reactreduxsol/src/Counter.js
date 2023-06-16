// Counter.js
import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Define mapStateToProps to map the state from Redux store to component props
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// Define mapDispatchToProps to map dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
