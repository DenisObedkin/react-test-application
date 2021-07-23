import React, { lazy } from 'react';

const ToDoForm = lazy(() => import('../../forms/todoform'));

export function TodoUpdate() {
  return <ToDoForm element={'test'} />;
}
