import Produto from "@/core/Produto"

interface TabelaProps {
    produtos: Produto[]
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th>Código</th>
                <th>EAN</th>
                <th>Nome</th>
                <th>Preço Venda</th>
                <th>Preço Custo</th>
                <th>Margem</th>
                <th>Alicota</th>
            </tr>
        )
    }
    function renderizarDados() {
        return props.produtos?.map((produto, i) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.cod_barra}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco_venda}</td>
                    <td>{produto.preco_custo}</td>
                    <td>{produto.margem}</td>
                    <td>{produto.alicota}</td>
                </tr>
            )
        })
    }
    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}