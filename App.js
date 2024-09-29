import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks state

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the existing tasks array
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="App">
        <h1>To-Do List Application</h1>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add-task" element={<AddTask addTask={addTask} />} />
          <Route path="/edit-task/:id" element={<EditTask tasks={tasks} editTask={editTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
