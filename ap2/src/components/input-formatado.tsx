interface InputFormatadoProps {
    label?: string;
    tipo: string;
    valor: string | number;
    onInput?: (e: any) => any;
    className?: string
}


export default function InputFormatado(props: InputFormatadoProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-start justify-start w-full">
                <label className="mt-4 text-sm">{props.label}</label>
            </div>
            <div className="flex items-start justify-start w-full">
                <input
                    type={props.tipo}
                    value={props.valor}
                    onInput={props.onInput}
                    className={`
                    text-gray-600 px-2 border border-zinc-500
                    w-full h-10 rounded-md
                    ${props.className ?? ''}
                `}
                />
            </div>
        </div>
    );
}