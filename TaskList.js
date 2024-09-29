import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <Link to={`/edit-task/${task.id}`}>Edit</Link>
                <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-task">
        <button>Add Task</button>
      </Link>
    </div>
  );
};

export default TaskList;
