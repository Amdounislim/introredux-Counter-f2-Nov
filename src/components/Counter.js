import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../JS/actions/actionCounter";

const Counter = (props) => {
  return (
    <div>
      <h1>COUNTER</h1>
      <button className="decrement-btn" onClick={props.decrement}>-</button>
      <span>{props.count}</span>
      <button className="increment-btn" onClick={props.increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={props.reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.reducerCounter.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//   };
// };

// const mapDispatchToProps ={
//     increment
// };

export default connect(mapStateToProps, { increment, decrement, reset })(Counter);
