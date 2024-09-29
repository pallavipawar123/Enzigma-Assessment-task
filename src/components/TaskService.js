// src/components/TaskService.js
let tasks = [
  { id: 1, assignedTo: 'User 1', dueDate: '12/10/2024', status: 'Completed', priority: 'Low', comments: 'This task is good' },
  { id: 2, assignedTo: 'User 2', dueDate: '14/09/2024', status: 'In Progress', priority: 'High', comments: 'This Edit' },
  { id: 3, assignedTo: 'User 3', dueDate: '18/08/2024', status: 'Not Started', priority: 'Low', comments: 'This' },
  { id: 4, assignedTo: 'User 4', dueDate: '12/06/2024', status: 'In Progress', priority: 'Normal', comments: 'This task is good' },
];

export const getTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  task.id = tasks.length + 1; // Assuming IDs are sequential
  tasks.push(task);
};

export const updateTask = (updatedTask) => {
  tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
};

export const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
};

export const getTaskById = (id) => {
  return tasks.find(task => task.id === parseInt(id));
};
