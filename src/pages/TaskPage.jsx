import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return (
        <div className="flex justify-center p-6">
            <div className="w-[600px]">
                <div className="flex items-center relative justify-center">
                    <button onClick={() => navigate(-1)} className="absolute left-0">
                        <ChevronLeftIcon />
                    </button>

                    <h1 className="text-3xl text-gray-300 font-bold text-center">
                        Detalhes da Tarefa
                    </h1>
                </div>

                <div className="bg-[#222222] p-6 rounded-t-md mt-7 shadow flex flex-col">
                    <h1 className="text-white text-2xl text-center">{title}</h1>
                </div>
                <div className="bg-[#444654] p-6 rounded-b-md shadow">
                    <p className="text-center">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;