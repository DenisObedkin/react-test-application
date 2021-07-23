import React, { Suspense, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function ToDoForm(props) {
  const { element } = props;
  const [value, setValue] = useState(element ?? '');
  let title = '';
  if (element) title = `Update ${value.toLowerCase()}`;
  else title = `Create ${value === '' ? 'new element' : value}`;

  useEffect(() => {
    setValue(element ?? '');
  }, [element]);

  let history = useHistory();

  return (
    <div>
      <Suspense fallback={<div>Content loading...</div>}>
        <h4>{title}</h4>
        <input
          type="text"
          placeholder="Input some text..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        &nbsp;
        <input type="button" value="Save" />
        &nbsp;
        <input
          type="button"
          value="Cancel"
          onClick={(e) => history.push('/todos')}
        />
        &nbsp;
      </Suspense>
    </div>
  );
}
