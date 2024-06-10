import Produto from "@/core/Produto"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    produtos: Produto[]
    produtoSelecionado?: (produto: Produto) => void
    produtoExcluido?: (produto: Produto) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">EAN</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Preço Venda</th>
                <th className="text-left p-4">Preço Custo</th>
                <th className="text-left p-4">Margem</th>
                <th className="text-left p-4">Preço Sugerido</th>
                <th className="text-left p-4">Alicota</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarAcoes(produto: Produto) {
        return (
            <td className="flex justify-center">
                {props.produtoSelecionado ? (
                    <button onClick={()=> props.produtoSelecionado?.(produto)}
                    className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-slate-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.produtoExcluido ? (
                    <button onClick={()=> props.produtoExcluido?.(produto)}
                    className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-slate-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    function mascaraDados(dadosN) {
        const dados = parseFloat(dadosN)        
        const resultado = (`R$ ${((dados).toFixed(2)).replace('.', ',')}`)
        return resultado
    }

    function precoSugerido(precVendaN, preCustoN, margemN) {
        const precVenda = parseFloat(precVendaN)
        const preCusto = parseFloat(preCustoN)
        const margem = parseFloat(margemN)

        const precSug = (((preCusto * margem) / 100) + preCusto)
        const resultado = `R$ ${(precSug.toFixed(2)).replace('.', ',')}`
        if (precVenda > precSug) {
            return <td className="text-green-600 text-center p-4">{resultado}</td>
        } else if (precVenda === precSug) {
            return <td className="text-blue-700 text-center p-4">{resultado}</td>
        } else {
            return <td className="text-red-700 text-center p-4">{resultado}</td>
        }
    }


    function renderizarDados() {
        return props.produtos?.map((produto, i) => {
            return (
                <tr key={produto.id}
                    className={`
                    ${i % 2 === 0 ? 'bg-green-100' : 'bg-blue-100'}
                `}>
                    <td className="text-center p-4">{produto.id}</td>
                    <td className="text-left p-4">{produto.cod_barra}</td>
                    <td className="text-left p-4">{produto.nome}</td>
                    <td className="text-center p-4">{mascaraDados(produto.preco_venda)}</td>
                    <td className="text-center p-4">{mascaraDados(produto.preco_custo)}</td>
                    <td className="text-center p-4">{`${produto.margem}%`}</td>
                    {precoSugerido(produto.preco_venda, produto.preco_custo, produto.margem)}
                    <td className="text-center p-4">{produto.alicota}</td>
                    {exibirAcoes ? renderizarAcoes(produto) : false}
                </tr>
            )
        })
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
                bg-gradient-to-r from-blue-600 to-green-500
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}