// eslint-disable-next-line no-unused-vars
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import timerReducer from './timer/timerReducer';
// import { combineReducers } from 'redux';

// import { createStore } from 'redux';

// const rootReducer = combineReducers({
//   timer: timerReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = configureStore({
  reducer: { timer: timerReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
