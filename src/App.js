import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

const Todo = lazy(() => import('./components/todo'));
const Fetch = lazy(() => import('./components/fetch'));

export default function App() {
  return (
    <Suspense fallback={<div>Content loading...</div>}>
      <Router>
        <div>
          <nav>
            <Link to="/todos">Home</Link>&nbsp;&nbsp;
          </nav>
          <hr />
        </div>

        <Switch>
          <Route path="/todos" component={Todo}></Route>
        </Switch>
      </Router>
    </Suspense>
  );
}
