function AddTask(){
    return (
        <div className="space-y-4 bg-[#444654] p-6 rounded-md mt-7 shadow flex flex-col">
            <input type="text" className="px-4 py-2 rounded-md bg-[#222222]" placeholder="Título"/>
            <input type="text" className="px-4 py-2 rounded-md bg-[#222222]" placeholder="Descrição"/>

            <button className="bg-neutral-200 p-3 rounded-md text-black font-medium">Adicionar</button>
        </div>
    );
}

export default AddTask;