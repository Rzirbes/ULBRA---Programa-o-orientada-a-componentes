"use client";
import React, { useState } from "react";
import Card from "./card";

export default function Cards({ products }: { products: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(products.length / itemsPerPage); 

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative max-w-5xl mx-auto overflow-hidden">

            <button
                onClick={handlePrev}
                className="absolute left top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                {"<"}
            </button>

            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {products.map((product) => (
                    <div key={product.id} className="flex-none w-full md:w-1/3 px-4">
                        <Card
                            id={product.id}
                            photo_url={product.photo_url}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                {">"}
            </button>


            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
