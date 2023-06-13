import React from 'react';

function Task({ task }) {
  const { id, title, completed } = task;

  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Task;