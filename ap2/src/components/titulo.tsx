export default function Titulo(props: any){
    return(
        <div className=" 
            text-3xl mt-7 px-7 text-zinc-200
        ">
            <p>Seja bem vindo, {props.nome}</p>
        </div>
    )
}