export default function Botao(props: any) {
    return (
        <div className="px-7 mt-10">
            <button onClick={props.onClick} className=" 
                px-4 py-2 
                bg-blue-400 text-zinc-200 rounded-lg
                ">
                {props.nome}
            </button>
        </div>
    )
}