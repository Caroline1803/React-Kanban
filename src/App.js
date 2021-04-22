
import React, { useState } from "react";

import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaksList from "./components/TaskList/TaskList";
// definindo objetos
const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendente"
};
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc = 1;
  return idAcc;
};


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Pendente" />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
      </div>
    </div>
  );
}

  const [tasks, setTasks] = useState([]); //array

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
        <div className="container">
          <TaksList title="Pendente" onAddTask={addTask} tasks={tasks} />
          <TaksList title="Fazendo" onAddTask={addTask} tasks={tasks} />
          <TaksList title="Completo" onAddTask={addTask} tasks={tasks} />
        </div>
      </ul>
    </div>
  );
}
