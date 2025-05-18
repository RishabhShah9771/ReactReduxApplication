import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

// Functional Counter component using React Redux hooks
const Counter = () => {
  // Get the current counter value from Redux store
  const counter = useSelector((state) => state.counter.counter);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();
  // Get the showCounter flag from Redux store
  const show = useSelector((state) => state.counter.showCounter);

  // Handler to increment the counter
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // Handler to increase the counter by 5
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // Dispatches an action with payload 5
  };

  // Handler to decrement the counter
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // Handler to toggle the visibility of the counter
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // Render the component UI
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* Show counter value only if show is true */}
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

////////////////////////////////////////////////////////////////////
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// // Same as useSelecter passing state to counter then state.counter
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// // Same as the useDispatch method just in the case of class compoenent.
// const mapDisptachToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// // connect will perform whole task for you this is the approach in the class compoenent.
// export default connect(mapStateToProps, mapDisptachToProps)(Counter);
