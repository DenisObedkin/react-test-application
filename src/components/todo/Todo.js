import React, { Fragment, lazy } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const TodoCreate = lazy(() => import('./create'));
const TodoList = lazy(() => import('./list'));
const TodoUpdate = lazy(() => import('./update'));
const NotFound = lazy(() => import('./notfound'));

export function Todo() {
  const match = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Route path={`${match.url}/create`} component={TodoCreate} />
        <Route path={`${match.url}/update/:id`} component={TodoUpdate} />
        <Route path={`${match.url}`} component={TodoList} />
      </Switch>
    </Fragment>
  );
}
