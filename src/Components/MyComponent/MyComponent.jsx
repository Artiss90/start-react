// MyComponent.js
// import withHigherOrderComponent from 'path/withHOC/withHigherOrderComponent';
// import withLog from 'path/withHOC/withLog';
import withFetch from 'path/withHOC/withFetch';
import React from 'react';

const MyComponent = props => (
  <div>
    <ul>
      {props.data.map(prop => (
        <li key={prop.id}>{prop.title}</li>
      ))}
    </ul>
  </div>
);

export default withFetch('https://jsonplaceholder.typicode.com/todos')(
  MyComponent,
);
