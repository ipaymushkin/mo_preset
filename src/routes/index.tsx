import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminPage from '../pages/admin';
import MainPage from '../pages/main';

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={MainPage} />
      <Route exact path={'/admin'} component={AdminPage} />
      <Route path='*' render={() => <Redirect to={'/'} />} />
    </Switch>
  );
};

export default Routes;
