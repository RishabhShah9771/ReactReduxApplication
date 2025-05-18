import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
  if (action.type === "increment") {
    // Objects in reducer will not merge the existing state it will overwrite the existing state and returns new state.
    // Never mutate the existing state in redux need to return new state in redux.
    // Always create a brand new array or objects.
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;
