import { createAction } from '@reduxjs/toolkit';

const increment = createAction('timer/increment');
// console.log(increment(20));

const decrement = createAction('timer/decrement');

const changeStep = createAction('timer/changeStep');
// eslint-disable-next-line import/no-anonymous-default-export
export default { increment, decrement, changeStep };
