import Card from "./card";

export default function Cards({ convidados }: { convidados: Array<any> }) {

    return (
        <div className="grid grid-cols-3 gap-5 px-7 mt-10">
            {convidados.map((convidado, index) => (
                <Card
                    key={index}
                    nome={convidado.nome}
                    descricao={`${convidado.egresso === 'Sim' ? "Egresso" : "Estudante"}`}
                    pago={`${convidado.pago === 'Sim' ? "Confirmado" : "Pendente"}`}
                    imagem={convidado.imagem || "https://picsum.photos/150/150?grayscale&random=1"}
                />
            ))}
        </div>
    )
}