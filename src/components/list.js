import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch as match,
} from 'react-router-dom';

const ToDoForm = lazy(() => import('./forms/todoform'));

export default function ElementsList(props) {
  const elements = props.elements;
  const listItems = elements.map((element, idx) => (
    <li key={element.toString()}>
      {element}&nbsp;&nbsp;
      <Link to={`/update/${idx + 1}`} params={{ element }}>
        Update
      </Link>
    </li>
  ));

  return (
    <div>
      <h3>Список элементов</h3>

      <ul>{listItems}</ul>

      <Switch>
        <Route
          path="/update/:id"
          component={() => (
            <ToDoForm element={elements[match().params.id - 1]} />
          )}
        />
      </Switch>
    </div>
  );
}
