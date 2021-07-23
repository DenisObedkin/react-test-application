import React, { lazy } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export function TodoList() {
  const match = useRouteMatch();
  const elements = [
    'First sample message',
    'Second sample message',
    'Third sample message',
  ];

  const listItems = elements.map((element, idx) => (
    <li key={element.toString()}>
      {element}&nbsp;&nbsp;
      <Link to={`${match.url}/update/${idx + 1}`}>Update</Link>
    </li>
  ));

  return (
    <div>
      <Link to={`${match.url}/create`}>Create</Link>

      <h3>Список элементов</h3>

      <ul>{listItems}</ul>
    </div>
  );
}
