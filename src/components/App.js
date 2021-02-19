import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes/routes';
import Layout from './Layout';
// import CommentsView from 'views/CommentsView';
// import AppBar from './AppBar';

const App = () => (
  <>
    <Layout>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Layout>
  </>
);

export default App;
