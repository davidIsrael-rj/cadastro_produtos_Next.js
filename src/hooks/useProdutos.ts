import ColecaoProduto from "@/backend/db/ColecaoProduto"
import Produto from "@/core/Produto"
import ProdutoRepositorio from "@/core/ProdutoRepositorio"
import { useEffect, useState } from "react"
import useTabelaForm from "./useTabelaForm"

export default function useProdutos() {
    const repo: ProdutoRepositorio = new ColecaoProduto()

    const {
        exibirFormulario,
        exibirTabela,
        tabelaVisivel,
    } = useTabelaForm()

    const [produto, setProduto] = useState<Produto>(Produto.vazio())
    const [produtos, setProdutos] = useState<Produto[]>([])



    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(produtos => {
            setProdutos(produtos)
            exibirTabela()
        })

    }
    function selecionarProduto(produto: Produto) {
        setProduto(produto)
        exibirFormulario()
    }

    async function excluirProduto(produto: Produto) {
        await repo.excluir(produto)
        obterTodos()
    }
    function novoProduto() {
        setProduto(Produto.vazio())
        exibirFormulario()
    }

    async function salvarProduto(produto: Produto) {
        await repo.salvar(produto)
        obterTodos()
    }

    return {
        tabelaVisivel,
        produto,
        produtos,
        salvarProduto,
        novoProduto,
        excluirProduto,
        selecionarProduto,
        exibirTabela,
        obterTodos
    }

}