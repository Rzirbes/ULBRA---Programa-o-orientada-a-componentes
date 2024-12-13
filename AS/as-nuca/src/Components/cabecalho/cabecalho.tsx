import BarraNavegacao from "../barra-navegacao/barra-navegacao";

interface CabecalhoProps {
    titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps) {
    return (
        <div
            className="
            flex justify-around items-center px-10
            gap-10
            bg-zinc-900 h-20 w-full"
        >
            <div className="text-white text-lg font-thin">{titulo}</div>
            <div>
                <BarraNavegacao />
            </div>
        </div>
    );
}
