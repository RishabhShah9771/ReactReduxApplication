import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// Create the Redux store using configureStore
// The reducer property is an object where each key represents a slice of state
// and each value is the corresponding reducer function for that slice.
// This allows you to manage multiple slices of state in a single store.
const store = configureStore({
  // The state will have two top-level keys: 'counter' and 'auth'
  // Each key is managed by its respective reducer
  reducer: {
    counter: counterReducer, // Handles state and actions related to the counter
    auth: authReducer, // Handles state and actions related to authentication
  },
});

export default store;
