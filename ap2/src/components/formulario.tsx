import { useState } from "react";
import InputFormatado from "./input-formatado";
import InputCheckbox from "./input-checkbox";

export default function Formulario({ onSubmit }: { onSubmit: (convidado: any) => void }) {
    let [nome, setNome] = useState('');
    let [telefone, setTelefone] = useState('');
    let [imagem, setImagem] = useState('');
    let [egresso, setEgresso] = useState('');
    let [pago, setPago] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const novoConvidado = {
            nome,
            telefone,
            imagem,
            egresso,
            pago,
        };

        onSubmit(novoConvidado);

        setNome('');
        setTelefone('');
        setImagem('');
        setEgresso('');
        setPago('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputFormatado
                label="Nome"
                onInput={(e: any) => setNome(e.target.value)}
                valor={nome}
                tipo="string"
            />
            <InputFormatado
                label="Telefone"
                onInput={(e: any) => setTelefone(e.target.value)}
                valor={telefone}
                tipo="string"
            />
            <InputCheckbox
                label="Egresso/Convidado"
                name="egresso"
                selectedValue={egresso}
                onChange={setEgresso}
            />
            <InputCheckbox
                label="Pago"
                name="pago"
                selectedValue={pago}
                onChange={setPago}
            />
            <InputFormatado
                label="Imagem"
                onInput={(e: any) => setImagem(e.target.value)}
                valor={imagem}
                tipo="string"
            />
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Adicionar Convidado
            </button>
        </form>
    );
}
