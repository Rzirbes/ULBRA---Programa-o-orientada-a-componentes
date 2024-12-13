import Layout from "../layout";

export default function PaginaInicial() {
    return (
        <Layout>
            <div className="
            flex flex-col justify-center items-center gap-4
            h-full ">
                <span className="text-black font-black text-3xl">
                    Seja bem vindo
                </span>
                <span className="text-black font-black text-3xl">
                    Essa é a página e-commerce
                </span>
                <span className="text-black font-black text-3xl">
                    Produzida na AS de Programação Orientada a Componentes
                </span>
            </div>
        </Layout>
    )
}