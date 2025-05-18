import { createSlice } from "@reduxjs/toolkit";

// Create a slice for authentication state management
const authSlice = createSlice({
  // Name of the slice, used as a prefix for generated action types
  name: "authentication",
  // Initial state for the authentication slice
  initialState: { isAuthenticated: false },
  // Reducers define how the state can be updated
  reducers: {
    // Action to set isAuthenticated to true (user logs in)
    login(state) {
      state.isAuthenticated = true;
    },
    // Action to set isAuthenticated to false (user logs out)
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

// const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
//   if (action.type === "increment") {
//     // Objects in reducer will not merge the existing state it will overwrite the existing state and returns new state.
//     // Never mutate the existing state in redux need to return new state in redux.
//     // Always create a brand new array or objects.
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };
