import React, { lazy } from 'react';

const ToDoForm = lazy(() => import('../../forms/todoform'));

export function TodoCreate() {
  return (
    <div>
      <ToDoForm />
    </div>
  );
}
