import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onRemoveTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={() => onToggleComplete(task.id)} 
          onRemove={() => onRemoveTask(task.id)} 
        />
      ))}
    </div>
  );
};

export default TaskList;
