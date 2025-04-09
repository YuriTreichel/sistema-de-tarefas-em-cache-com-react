import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      // Preciso atualizar essa tarefa
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      // Não precisa atualizar a tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-gray-300 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onDeleteTaskClick={onDeleteTaskClick} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}

export default App;
