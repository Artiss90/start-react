import React from 'react';

function Counter({ initialValue, step }) {
  return (
    <div>
      <p>{initialValue}</p>
      <p>{step}</p>
      <p>{initialValue + step}</p>
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 1,
  step: 1,
};
export default Counter;
