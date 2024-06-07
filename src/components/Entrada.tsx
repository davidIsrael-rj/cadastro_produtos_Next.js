interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    classNam?: string
    valorMudou?:(valor: any)=> void
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col m-1 ${props.classNam}`}>
            <label className="mb-4" >{props.texto}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-green-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '': 'focus:bg-white'}
                `}
            />
        </div>
    )
}