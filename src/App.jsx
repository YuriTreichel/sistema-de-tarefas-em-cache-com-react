import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Aprender Inglês",
      description: "Aprender Inglês para passar no curso de programação no Canadá",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Aprender React",
      description: "Aprender React para aprimorar meu currículo e conseguir uma vaga melhor",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Dashboard com Laravel/React",
      description: "Desenvolver um Dashboard com Laravel/React",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Aprender GitHub",
      description: "Aprender a usar o GitHub para subir os projetos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-200 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
