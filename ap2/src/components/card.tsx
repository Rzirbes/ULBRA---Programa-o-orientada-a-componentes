import Image from 'next/image'

export interface CardProps {
    nome: string
    descricao: string
    imagem: string
    pago: string
}

export default function Card(props: CardProps) {
    return (
        <div>
            <div className="
            flex flex-col items-center h-80
            border border-zinc-700 p-5 rounded-lg
        ">
                <Image
                    src={props.imagem}
                    width={150}
                    height={150}
                    alt="imagem do convidado"
                    className="self-center mb-7 rounded-full"
                />
                <h3 className="text-xl font-semibold">
                    {props.nome}
                </h3>
                <p className="text-zinc-500 text-sm">
                    {props.descricao}
                </p>
                <p className="text-zinc-500 text-sm">
                    {props.pago}
                </p>
            </div>
        </div>
    )
}