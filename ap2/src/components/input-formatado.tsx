import { aplicarMascaraTelefone } from "../utils/mascara"


interface InputFormatadoProps {
    label?: string;
    tipo: string; // "string", "number", ou "telefone"
    valor: string | number;
    onInput?: (e: any) => any;
    className?: string;
}

export default function InputFormatado(props: InputFormatadoProps) {

    const handleInput = (e: any) => {
        let valor = e.target.value;
        if (props.tipo === "telefone") {
            valor = aplicarMascaraTelefone(valor);
        }
        props.onInput && props.onInput({ ...e, target: { ...e.target, value: valor } });
    };

    return (
        <div className="flex flex-col items-center text-zinc-900 dark:text-zinc-200">
            <div className="flex items-start justify-start w-full">
                <label className="mt-4 text-sm">{props.label}</label>
            </div>
            <div className="flex items-start justify-start w-full">
                <input
                    type="text"
                    value={props.valor}
                    onInput={handleInput}
                    className={`
                    px-2 border border-zinc-500
                    w-full h-10 rounded-md
                    ${props.className ?? ''}`}
                />
            </div>
        </div>
    );
}
