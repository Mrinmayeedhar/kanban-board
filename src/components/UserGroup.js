import React from 'react';
import TaskCard from './TaskCard';
import './UserGroup.css';

const UserGroup = ({ user, tasks }) => {
  return (
    <div className="user-group">
      <h3>{user}</h3>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default UserGroup;