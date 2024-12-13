"use client";

import { useState } from "react";

export default function Formulario() {
    const [formData, setFormData] = useState({
        nome: "",
        preco: "",
        descricao: "",
        imagem: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        const newProduct = {
            name: formData.nome,
            price: parseFloat(formData.preco),
            description: formData.descricao,
            photo_url: formData.imagem,
        };

        try {
            const response = await fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar o produto.");
            }

            setMessage("Produto cadastrado com sucesso!");
            setFormData({
                nome: "",
                preco: "",
                descricao: "",
                imagem: "",
            });
        } catch (error) {
            console.error("Erro:", error);
            setMessage("Erro ao cadastrar o produto.");
        }
    };

    return (
        <div className="flex-1 flex justify-center items-center bg-white">
            <form
                className="bg-gray-100 text-black shadow-md rounded-lg p-8 w-96"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-4 text-center">Novo Produto</h1>

                {message && (
                    <div className={`mb-4 text-center ${message.includes("sucesso") ? "text-green-600" : "text-red-600"}`}>
                        {message}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nome">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="preco">
                        Preço
                    </label>
                    <input
                        type="text"
                        id="preco"
                        value={formData.preco}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="descricao">
                        Descrição
                    </label>
                    <input
                        type="text"
                        id="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="imagem">
                        Imagem
                    </label>
                    <input
                        type="text"
                        id="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
