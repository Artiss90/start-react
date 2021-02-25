import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload < 0 ? state : state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, { type, payload }) => {
  switch (type) {
    case CHANGE_STEP:
      return Number(payload);

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
