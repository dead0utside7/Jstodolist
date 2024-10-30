import React from 'react';

const TaskItem = ({ task, onToggle, onRemove }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ccc', marginBottom: '5px' }}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name} - {task.deadline} - Priority: {task.priority}
      </span>
      <div>
        <button onClick={onToggle} style={{ marginRight: '5px' }}>Toggle Complete</button>
        <button onClick={onRemove} style={{ backgroundColor: 'red', color: 'white' }}>Remove</button>
      </div>
    </div>
  );
};

export default TaskItem;
