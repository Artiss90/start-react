import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import timerActions from './redux/timer/timerActions';
import store from './redux/store';
import './index.css';

// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(timerActions.increment(15)));
// console.log(store.dispatch(timerActions.decrement(10)));
// console.log(store.dispatch(timerActions.changeStep(5)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
