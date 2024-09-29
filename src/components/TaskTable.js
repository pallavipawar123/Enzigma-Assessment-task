// src/components/TaskTable.js
import React from 'react';

const TaskTable = ({ tasks, deleteTask }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Assigned To</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Comments</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.assignedTo}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.status}</td>
                        <td>{task.priority}</td>
                        <td>{task.comments}</td>
                        <td>
                            <button>Edit</button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
