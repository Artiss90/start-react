// eslint-disable-next-line no-unused-vars
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import timerReducer from './timer/timerReducer';

const store = configureStore({
  reducer: { timer: timerReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
});
export default store;
