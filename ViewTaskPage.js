import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from './TaskService';

const ViewTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const fetchedTask = await getTaskById(id);
      setTask(fetchedTask);
    };
    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>Task Details</h1>
      <p>Assigned To: {task.assignedTo}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Comments: {task.comments}</p>
    </div>
  );
};

export default ViewTaskPage;
