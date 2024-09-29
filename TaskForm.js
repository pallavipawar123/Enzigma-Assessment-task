// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, task }) => {
    const [formData, setFormData] = useState({
        assignedTo: '',
        dueDate: '',
        status: '',
        priority: '',
        comments: ''
    });

    useEffect(() => {
        if (task) {
            setFormData(task);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
        setFormData({
            assignedTo: '',
            dueDate: '',
            status: '',
            priority: '',
            comments: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.assignedTo} onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })} placeholder="Assigned To" required />
            <input type="date" value={formData.dueDate} onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })} required />
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} required>
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>
            </select>
            <select value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} required>
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="text" value={formData.comments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} placeholder="Comments" required />
            <button type="submit">{task ? "Update Task" : "Add Task"}</button>
        </form>
    );
};

export default TaskForm;
