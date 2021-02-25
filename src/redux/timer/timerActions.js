import { createAction } from '@reduxjs/toolkit';
import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

// TODO упрощаєм код с помощю '@reduxjs/toolkit'
// const increment = value => {
//   return {
//     type: INCREMENT,
//     payload: {
//       value,
//     },
//   };
// };

const increment = createAction(INCREMENT);
// console.log(increment(20));

// const decrement = value => {
//   return {
//     type: DECREMENT,
//     payload: {
//       value,
//     },
//   };
// };

const decrement = createAction(DECREMENT);

// const changeStep = step => {
//   return {
//     type: CHANGE_STEP,
//     payload: {
//       step: Number(step),
//     },
//   };
// };

const changeStep = createAction(CHANGE_STEP);
// eslint-disable-next-line import/no-anonymous-default-export
export default { increment, decrement, changeStep };
