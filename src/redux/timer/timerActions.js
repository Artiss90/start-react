import { createAction } from '@reduxjs/toolkit';
// TODO избавляемся от типов
// import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

// TODO упрощаем код с помощью '@reduxjs/toolkit'
// const increment = value => {
//   return {
//     type: INCREMENT,
//     payload: {
//       value,
//     },
//   };
// };

const increment = createAction('timer/increment');
// console.log(increment(20));

// const decrement = value => {
//   return {
//     type: DECREMENT,
//     payload: {
//       value,
//     },
//   };
// };

const decrement = createAction('timer/decrement');

// const changeStep = step => {
//   return {
//     type: CHANGE_STEP,
//     payload: {
//       step: Number(step),
//     },
//   };
// };

const changeStep = createAction('timer/changeStep');
// eslint-disable-next-line import/no-anonymous-default-export
export default { increment, decrement, changeStep };
