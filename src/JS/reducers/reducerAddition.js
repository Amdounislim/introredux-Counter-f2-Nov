import { ADDITION } from "../constants/actionsTypes";
const initalState = {
  sum: 0,
};

const reducerAddition = (state = initalState, action) => {
  if (action.type === ADDITION) {
    // return { ...state, sum: action.payload.val1 + action.payload.val2 };
    return { ...state, sum: action.x + action.y };
  } else {
    return state;
  }
};

export default reducerAddition;
