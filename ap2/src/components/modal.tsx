
import Botao from "./botao"
import Formulario from "./formulario"

export default function Modal(props: any) {

    return (
        <div className="fixed inset-0  text-zinc-900 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-zinc-900 rounded-lg max-w-lg w-[554px] py-10 px-14">
                <Formulario onSubmit={props.onSubmit} />
                <div className="flex justify-end space-x-2">
                    <Botao nome="Cancelar" onClick={props.onClick} />
                </div>
            </div>
        </div>
    )
}