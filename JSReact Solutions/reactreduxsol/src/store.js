// store.js
import { createStore } from 'redux';

// Define a reducer function
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
