"use client"
import React, { useEffect, useState } from "react";
import Cards from "@/Components/card/cards";
import Layout from "../layout";

export default function PaginaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch("http://localhost:3001/products");
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <Layout>
            <div className="flex justify-center items-center h-full">
                {produtos.length > 0 ? (
                    <Cards products={produtos} />
                ) : (
                    <p>Carregando produtos...</p>
                )}
            </div>
        </Layout>
    );
}
