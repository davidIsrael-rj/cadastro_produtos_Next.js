import Produto from "@/core/Produto"

interface TabelaProps {
    produtos: Produto[]
}

export default function Tabela(props: TabelaProps) {

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
            </tr>
        )
    }
    function mascaraDados(dados) {
        const resultado = (`R$ ${((dados).toFixed(2)).replace('.', ',')}`)
        return resultado
    }

    function precoSugerido(precVenda, preCusto, margem) {
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
                    ${i % 2 === 0 ? 'bg-green-100': 'bg-blue-100'}
                `}>
                    <td className="text-center p-4">{produto.id}</td>
                    <td className="text-left p-4">{produto.cod_barra}</td>
                    <td className="text-left p-4">{produto.nome}</td>
                    <td className="text-center p-4">{mascaraDados(produto.preco_venda)}</td>
                    <td className="text-center p-4">{mascaraDados(produto.preco_custo)}</td>
                    <td className="text-center p-4">{`${produto.margem}%`}</td>
                    {precoSugerido(produto.preco_venda, produto.preco_custo, produto.margem)}
                    <td className="text-center p-4">{produto.alicota}</td>
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