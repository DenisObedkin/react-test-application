import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

const List = lazy(() => import('./components/list'));
const ToDoForm = lazy(() => import('./components/forms/todoform'));

export default function App() {
  const elements = [
    'First sample message',
    'Second sample message',
    'Third sample message',
  ];

  return (
    <Suspense fallback={<div>Content loading...</div>}>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <hr />
          <List elements={elements} />
          <br />
          <Link to="/create">Create</Link>

          <Switch>
            <Route exact path="/"></Route>
            <Route path="/create" component={ToDoForm} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
