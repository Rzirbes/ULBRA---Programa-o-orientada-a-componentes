import Formulario from "@/Components/formulario/formulario";
import Layout from "../layout";

export default function PaginaContato() {
    return (
        <Layout>
            <div className="flex h-full bg-zinc-200">
                <div
                    className="flex-1 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/ab46/f26d/2cc783e3c23942da543be2b902629d1c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VzwvfBHAQmJG~okjJHzPWmQRC5-4jHKAClKggR7CEALgBDZeRBlaxoXkYAXBmQgGfGvqt1Y18gv2AhAJu-qEDMKbcjhcbTtZxsZaJfXqbZ7EOQSPn0-wiLz-sAMmGn5J~E2su0NgsclCE7PIbp24EhPU4czHO86udVA~wGmd2y864hOdR7WewLfQSNdvhJ-2a17JYpxxNeyawcHQmNoPDXxnkD2BtGanknB4Bxb03ephYVTJoBOOpnRo6fXm~eeXCCB~1sa3iqsAd-gl~3BbMbcArtZ21R8l-Hdy5K7zDsxzMglZQv06Dsfa-2T05e5sxOIEZX~XZNGxCQDN4TBqgw__')",
                    }}
                ></div>

               <Formulario/>
            </div>
        </Layout>
    )
}