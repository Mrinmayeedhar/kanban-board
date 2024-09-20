import logo from './logo.svg';
import React, { useState } from 'react';
import UserGroup from './components/UserGroup';
import TaskCard from './components/TaskCard';
import './App.css';

const App = () => {
  const [groupByUser, setGroupByUser] = useState(true);

  const tasks = [
    { user: 'Alice', title: 'Task 1', description: 'Setup project' },
    { user: 'Alice', title: 'Task 2', description: 'Create login page' },
    { user: 'Bob', title: 'Task 1', description: 'Design database' },
    { user: 'Charlie', title: 'Task 1', description: 'Write API' },
    { user: 'Charlie', title: 'Task 2', description: 'Test API' },
  ];

  const users = [...new Set(tasks.map(task => task.user))];

  return (
    <div className="app">
      <h1>Task Management</h1>
      <div className="toggle-group">
        <button onClick={() => setGroupByUser(!groupByUser)}>
          {groupByUser ? 'Ungroup by User' : 'Group by User'}
        </button>
      </div>
      <div className="task-container">
        {groupByUser ? (
          users.map((user) => (
            <UserGroup
              key={user}
              user={user}
              tasks={tasks.filter(task => task.user === user)}
            />
          ))
        ) : (
          tasks.map((task, index) => <TaskCard key={index} task={task} />)
        )}
      </div>
    </div>
  );
};

export default App;