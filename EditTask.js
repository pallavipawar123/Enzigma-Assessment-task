import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = ({ tasks, editTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskToEdit = tasks.find(task => task.id === parseInt(id));
  const [assignedTo, setAssignedTo] = useState(taskToEdit ? taskToEdit.assignedTo : "");
  const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : "Not Started");
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : "");
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : "Medium");
  const [comments, setComments] = useState(taskToEdit ? taskToEdit.comments : "");

  useEffect(() => {
    if (taskToEdit) {
      setAssignedTo(taskToEdit.assignedTo);
      setStatus(taskToEdit.status);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
      setComments(taskToEdit.comments);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: taskToEdit.id,
      assignedTo,
      status,
      dueDate,
      priority,
      comments,
    };
    editTask(updatedTask);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Assigned To:
          <input type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </label>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTask;

