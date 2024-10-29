import Logo from "./logo";

export default function Cabecalho() {
    return (
        <div className="
            flex items-center justify-center px-7
            h-28 w-full mt-3
            bg-blue-400

            ">

            <Logo />

            <div className="
                flex flex-1
                items-center justify-center
                font-black text-2xl
                text-zinc-200
            ">
                <p>Entrevero</p>
            </div>
        </div>
    )
}