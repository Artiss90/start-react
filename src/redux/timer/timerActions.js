import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

const increment = value => {
  return {
    type: INCREMENT,
    payload: {
      value,
    },
  };
};

const decrement = value => {
  return {
    type: DECREMENT,
    payload: {
      value,
    },
  };
};

const changeStep = step => {
  return {
    type: CHANGE_STEP,
    payload: {
      step: Number(step),
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { increment, decrement, changeStep };
