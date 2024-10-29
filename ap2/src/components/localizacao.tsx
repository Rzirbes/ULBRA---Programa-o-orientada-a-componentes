import { useEffect, useState } from "react";
import Botao from "./botao";

export default function Localizacao() {
    const [localizacao, setLocalizacao] = useState<any>(null); 
    const [mostrarLocalizacao, setMostrarLocalizacao] = useState(false); 


    useEffect(() => {
        const fetchCep = async () => {
            const response = await fetch('https://viacep.com.br/ws/95560000/json/');
            const data = await response.json();
            setLocalizacao(data); 
        };

        fetchCep();
    }, []);

    return (
        <div>
            <Botao
                nome="localização"
                onClick={() => setMostrarLocalizacao(!mostrarLocalizacao)}
            />

            {mostrarLocalizacao && localizacao && (
                <div className=" flex gap-6 mt-4 p-4 rounded">
                    <p><strong>CEP:</strong> {localizacao.cep}</p>
                    <p><strong>Cidade:</strong> {localizacao.localidade}</p>
                    <p><strong>UF:</strong> {localizacao.uf}</p>
                    <p><strong>Bairro:</strong> {localizacao.bairro || 'N/A'}</p>
                    <p><strong>Logradouro:</strong> {localizacao.logradouro || 'N/A'}</p>
                </div>
            )}
        </div>
    );
}
