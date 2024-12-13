"use client";

import Link from "next/link";

export default function BarraNavegacao() {
    return (
        <nav className="text-white py-4">
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link href="/pagina-inicial" className="hover:text-gray-200">
                        HOME
                    </Link>
                </li>
                <p>|</p>
                <li>
                    <Link href="/pagina-produtos" className="hover:text-gray-200">
                        PRODUTOS
                    </Link>
                </li>
                <p>|</p>
                <li>
                    <Link href="/pagina-contato" className="hover:text-gray-200">
                        CONTATO
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
