"use client"

import "./globals.css";
import Cabecalho from "@/Components/cabecalho/cabecalho";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getTituloPagina = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/pagina-produtos":
        return "Produtos";
      case "/pagina-contato":
        return "Nosso Contato";
      case "/pagina-inicial":
        return "Home";
      default:
        return "Página";
    }
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col h-screen">
          <Cabecalho titulo={getTituloPagina()} />
          <main className="flex-1 bg-zinc-200">{children}</main>
        </div>
      </body>
    </html>
  );
}
