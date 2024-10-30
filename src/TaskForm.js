import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !deadline) return;

    onAddTask({ id: Date.now(), name, deadline, priority, completed: false });

    // Очистка полів
    setName('');
    setDeadline('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ marginRight: '10px' }}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
