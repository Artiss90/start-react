import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import timerActions from './timerActions';

const valueReducer = createReducer(0, {
  [timerActions.increment]: (_, { payload }) => _ + payload,
  [timerActions.decrement]: (_, { payload }) => _ - payload,
});

const stepReducer = createReducer(5, {
  [timerActions.changeStep]: (_, { payload }) => Number(payload),
});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
