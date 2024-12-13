// Card.js

import Link from "next/link";


interface CardProps {
    id: string;
    photo_url: string;
    name: string;
    price: number;
    description: string
}

export default function Card({ id, photo_url, name, price, description }: CardProps) {
    return (
        //     <div className="
        //   flex flex-col items-center h-80
        //   dark:text-zinc-200 text-zinc-900 dark:bg-zinc-800
        //   border border-zinc-700 p-5 rounded-lg
        // ">
        //         <Image
        //             src={props.img}
        //             width={150}
        //             height={150}
        //             alt={`Imagem do produto: ${props.description}`}
        //             className="self-center mb-7 rounded-full"
        //         />
        //         <h3 className="text-xl font-semibold">{props.description}</h3>
        //         <p className="text-zinc-500 text-sm">Price: ${props.price.toFixed(2)}</p>  // Format price with 2 decimals
        //     </div>
        <Link href={`/pagina-produtos/${id}`}>
            <div className="bg-white h-80 shadow-lg rounded-lg p-4 text-center cursor-pointer hover:shadow-xl transition-shadow">
                <img
                    src={photo_url} 
                    alt={name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-black">{name}</h3>
                <p className="text-gray-900">R$ {price.toFixed(2)}</p>
                <h3 className="text-sm font-light text-zinc-800">{description}</h3>
            </div>
        </Link>

    )
}