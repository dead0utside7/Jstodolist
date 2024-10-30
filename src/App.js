import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false, deadline: '2024-10-01', priority: 'high' },
    { id: 2, name: 'Task 2', completed: false, deadline: '2024-10-02', priority: 'medium' },
    { id: 3, name: 'Task 3', completed: false, deadline: '2024-10-03', priority: 'low' },
  ]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const sortTasksByPriority = (tasks) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return [...tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={sortTasksByPriority(tasks)} onToggleComplete={toggleComplete} onRemoveTask={removeTask} />
    </div>
  );
};

export default App;
