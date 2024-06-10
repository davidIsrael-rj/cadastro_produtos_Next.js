import ColecaoProduto from "@/backend/db/ColecaoProduto";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Produto from "@/core/Produto";
import ProdutoRepositorio from "@/core/ProdutoRepositorio";
import { useEffect, useState } from "react";

export default function Home() {

  const repo: ProdutoRepositorio = new ColecaoProduto()

  const [produto, setProduto] = useState<Produto>(Produto.vazio())
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  // const produtos = [
  //   new Produto("123456", "Caneta", 1.19, 0.90, 40, "18", "1"),
  //   new Produto("45", "Pente", 1.90, 1.40, 40, "18", "2"),
  //   new Produto("70", "Toalha", 11.50, 5.90, 40, "18", "3"),
  //   new Produto("55", "Panela", 55.49, 20.00, 40, "18", "4"),
  //   new Produto("65", "Camiseta", 25.90, 19.90, 40, "18", "5"),
  // ]

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(produtos => {
      setProdutos(produtos)
      setVisivel('tabela')
    })

  }
  function produtoSelecionado(produto: Produto) {
    // console.log(`Selecionando : ${produto.nome}`)
    setProduto(produto)
    setVisivel('form')
  }

  async function produtoExcluido(produto: Produto) {
    await repo.excluir(produto)
    obterTodos()
  }
  function novoProduto() {
    setProduto(Produto.vazio())
    setVisivel('form')
  }

  async function salvarProduto(produto: Produto) {
    // console.log(produto)
    await repo.salvar(produto)
    obterTodos()
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-green-500 via-yellow-600 to-blue-500
    `}>
      <Layout titulo="Cadastro de Produtos">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                onClick={novoProduto}
                cor="green"
                className="mb-2">
                Novo Produto
              </Botao>
            </div>
            <Tabela produtos={produtos}
              produtoSelecionado={produtoSelecionado}
              produtoExcluido={produtoExcluido} />
          </>
        ) : (
          <Formulario
            produto={produto}
            produtoMudou={salvarProduto}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>

  );
}
