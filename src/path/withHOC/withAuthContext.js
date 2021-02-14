import AuthContext from 'context/Auth';
import React from 'react';

const withAuthContext = WrappedComponent => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {ctx => <WrappedComponent {...props} auth={ctx} />}
      </AuthContext.Consumer>
    );
  };
};

export default withAuthContext;
