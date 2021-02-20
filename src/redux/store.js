import { createStore, combineReducers } from 'redux';
import timerReducer from './timer/timerReducer';

// import { createStore } from 'redux';

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const reducer = (state = { a: 10 }, action) => {
//   console.log('Log reducer: ', action);
//   return state;
// };

// const store = createStore(reducer);
export default store;
