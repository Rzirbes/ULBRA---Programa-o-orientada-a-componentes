'use client'
import Cabecalho from "./cabecalho";
import Cards from "./cards";
import Titulo from "./titulo";
import Botao from "./botao";
import { useEffect, useState } from "react";
import Modal from "./modal";
import Localizacao from "./localizacao";

export default function Pagina() {
    const [open, setOpen] = useState(false);
    const [convidados, setConvidados] = useState<Array<any>>([]);
    const [localizacao, setLocalizacao] = useState<any>(null);
    const [mostrarLocalizacao, setMostrarLocalizacao] = useState(false);

    const handleAddConvidado = (convidado: any) => {
        setConvidados([...convidados, convidado]);
        setOpen(false);
    };

    useEffect(() => {
        const fetchCep = async () => {
            const response = await fetch('https://viacep.com.br/ws/95560000/json/');
            const data = await response.json();
            setLocalizacao(data); // Armazena os dados da localização no estado
        };

        fetchCep();
    }, []);
    return (
        <div>
            <Cabecalho />
            <div className="flex justify-between">
                <Titulo nome="Rômulo" />
                <Botao nome="Adicionar Convidado" onClick={() => { setOpen(true) }} />

            </div>

            <Localizacao />

            {open && (
                <Modal
                    onClick={() => setOpen(false)}
                    onSubmit={handleAddConvidado}
                />
            )}
            {open && (
                <Modal
                    onClick={() => { setOpen(false) }}
                    onSubmit={handleAddConvidado}
                />
            )}
            <div>
                <Cards convidados={convidados} />
            </div>
        </div>
    )
}