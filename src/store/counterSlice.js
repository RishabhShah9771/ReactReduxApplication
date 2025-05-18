import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the counter feature
const counterSlice = createSlice({
  // Name of the slice, used as a prefix for generated action types
  name: "counter",
  // Initial state for the counter slice
  initialState: {
    counter: 0, // The current value of the counter
    showCounter: false, // Boolean to control visibility of the counter
  },
  // Reducer functions to handle actions and update state
  reducers: {
    // Increments the counter by 1
    increment(state) {
      state.counter++;
    },
    // Decrements the counter by 1
    decrement(state) {
      state.counter--;
    },
    // Increases the counter by a specific value provided in the action payload
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    // Toggles the visibility of the counter
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Actions objects are automatically created behind the scenes by createSlice.
// For example, counterSlice.actions.increment is an action creator for {type: "counter/increment"}

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
