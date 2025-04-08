function Tasks(props) {
  return (
    <ul className="space-y-4 bg-[#444654] p-6 rounded-md mt-7 shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
            <button className="bg-[#222222] text-white p-4 rounded-md w-full me-3">
                {task.title}
            </button>
            <button>
                Detalhes
            </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
