'use client'
import Cabecalho from "./cabecalho";
import Cards from "./cards";
import Titulo from "./titulo";
import Botao from "./botao";
import { useEffect, useState } from "react";
import Modal from "./modal";
import Localizacao from "./localizacao";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function Pagina() {
    const [open, setOpen] = useState(false);
    const [convidados, setConvidados] = useState<Array<any>>([]);
    const [tema, setTema] = useState<'dark' | ''>("dark")

    const handleAddConvidado = (convidado: any) => {
        setConvidados([...convidados, convidado]);
        setOpen(false);
    };

    function alternarTema() {
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    // useEffect(() => {
    //     const fetchCep = async () => {
    //         const response = await fetch('https://viacep.com.br/ws/95560000/json/');
    //         const data = await response.json();
    //         setLocalizacao(data);
    //     };

    //     fetchCep();
    // }, []);
    return (
        <div className={` ${tema}`}>
            <div className={`bg-zinc-200 dark:bg-zinc-900 h-screen`}>
                <Cabecalho />
                <div className=" flex justify-between">
                    <Titulo nome="Rômulo" />
                    <Botao nome="Adicionar Convidado" onClick={() => { setOpen(true) }} />

                </div>

                <Localizacao />

                <div className="text-zinc-900 dark:text-zinc-200 absolute mt-10 right-4 bottom-4">
                    <button onClick={alternarTema}>
                        {tema === '' ? <IconMoon /> : <IconSun />}
                    </button>
                </div>

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

        </div>

    )
}