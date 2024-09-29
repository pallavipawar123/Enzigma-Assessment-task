import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ addTask }) => {
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Unique ID
      assignedTo,
      status,
      dueDate,
      priority,
      comments,
    };
    addTask(newTask);
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Task</h2>
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

export default AddTask;
