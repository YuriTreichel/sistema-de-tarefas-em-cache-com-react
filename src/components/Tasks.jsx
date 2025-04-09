import { ChevronRight, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task){
    const query = new URLSearchParams();

    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-[#444654] p-6 rounded-md mt-7 shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-[#222222] text-white p-4 rounded-md w-full ${task.isCompleted && 'line-through'}`}
          >
            {task.title}
          </button>
          <button 
            onClick={() => onSeeDetailsClick(task)}
            className="bg-[#222222] text-white rounded-md px-4 py-2"
          >
            <ChevronRightIcon />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-[#222222] text-red-400 rounded-md px-4 py-2">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
