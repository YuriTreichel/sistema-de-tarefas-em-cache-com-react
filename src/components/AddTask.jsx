import { useState } from "react";

function AddTask(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 bg-[#444654] p-6 rounded-md mt-7 shadow flex flex-col">
            <input 
                type="text" 
                className="px-4 py-2 rounded-md border border-neutral-500 bg-[#222222] focus:outline-none focus:border-slate-300"
                placeholder="Título"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="text" 
                className="px-4 py-2 rounded-md border border-neutral-500 bg-[#222222] focus:outline-none focus:border-slate-300" 
                placeholder="Descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button 
                onClick={() => {
                    if(!title.trim() || !description.trim()){
                        return alert("Preencha todos os campos");
                    }
                    props.onAddTaskSubmit(title, description)
                }} 
                className="bg-neutral-200 p-3 rounded-md text-black font-medium">Adicionar</button>
        </div>
    );
}

export default AddTask;