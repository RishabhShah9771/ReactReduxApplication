import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      payload: 5,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
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
