import { useState } from "react";
import InputFormatado from "./input-formatado";
import InputCheckbox from "./input-checkbox";
import { validarFormulario } from "@/utils/mascara";

export default function Formulario({ onSubmit }: { onSubmit: (convidado: any) => void }) {
    let [nome, setNome] = useState('');
    let [telefone, setTelefone] = useState('');
    let [imagem, setImagem] = useState('');
    let [egresso, setEgresso] = useState('');
    let [pago, setPago] = useState('');
    const [erros, setErros] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const campos = { nome, telefone, egresso, pago };
        const novosErros = validarFormulario(campos);

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

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
            {erros.nome && <p className="text-red-500 text-sm">{erros.nome}</p>}

            <InputFormatado
                label="Telefone"
                onInput={(e: any) => setTelefone(e.target.value)}
                valor={telefone}
                tipo="telefone"
            />
            {erros.telefone && <p className="text-red-500 text-sm">{erros.telefone}</p>}

            <InputCheckbox
                label="Egresso/Convidado"
                name="egresso"
                selectedValue={egresso}
                onChange={setEgresso}
            />
            {erros.egresso && <p className="text-red-500 text-sm">{erros.egresso}</p>}
            <InputCheckbox
                label="Pago"
                name="pago"
                selectedValue={pago}
                onChange={setPago}
            />
            {erros.pago && <p className="text-red-500 text-sm">{erros.pago}</p>}
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
