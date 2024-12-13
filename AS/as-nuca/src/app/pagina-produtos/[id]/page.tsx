"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "@/app/layout";

export default function PaginaProduto() {
    const params = useParams();
    const productId = params.id;

    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products/${productId}`);
                if (!response.ok) {
                    throw new Error("Produto não encontrado!");
                }
                const data = await response.json();
                setProduct(data);
            } catch (err: any) {
                setError(err.message || "Erro ao buscar o produto.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <h1 className="text-2xl font-bold">Carregando produto...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-full">
                <h1 className="text-2xl font-bold">{error}</h1>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-full">
                <h1 className="text-2xl font-bold">Produto não encontrado!</h1>
            </div>
        );
    }

    return (
        <Layout>
            <div className="flex h-full justify-center items-center bg-zinc-200">
                <div className="flex flex-col bg-white h-5/6 w-5/6 rounded-lg shadow-lg overflow-hidden">
                    <div
                        className="flex w-full h-3/4"
                        style={{
                            backgroundImage: `url(${product.photo_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    <div className="flex flex-col justify-center items-center bg-black h-1/4 p-4">
                        <h1 className="text-2xl font-bold text-white">{product.name}</h1>
                        <p className="text-lg text-white mt-2">R$ {product.price.toFixed(2)}</p>
                        <p className="text-lg text-white mt-2"> {product.description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
