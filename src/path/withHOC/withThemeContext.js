import ThemeContext from 'context/ThemeContext';
import React from 'react';

const withThemeContext = WrappedComponent => {
  return function WithAuthContext(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedComponent {...props} theme={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
