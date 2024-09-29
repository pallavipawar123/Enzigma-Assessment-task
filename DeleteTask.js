import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteTask(id); // Implement this function to delete the task
    navigate('/'); // Navigate back to task list
  };

  return (
    <div>
      <h2>Are you sure you want to delete this task?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
};

export default DeleteTask;
