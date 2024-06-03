import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Produto from "@/core/Produto";

export default function Home() {
  const produtos = [
    new Produto("123456", "Caneta", 1.19, 0.90, 40, "18", "1"),
    new Produto("45", "Pente", 1.96, 1.40, 40, "18", "2"),
    new Produto("70", "Toalha", 11.50, 5.90, 40, "18", "3"),
    new Produto("55", "Panela", 55.49, 20.00, 40, "18", "4"),
    new Produto("65", "Camiseta", 25.90, 19.90, 40, "18", "5"),
  ]

  function produtoSelecionado(produto: Produto) {
console.log(`Selecionando : ${produto.nome}`)
  }

  function produtoExcluido(produto: Produto) {
console.log(`Excluir ${produto.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-green-500 via-yellow-600 to-blue-500
    `}>
      <Layout titulo="Cadastro de Produtos">
        <Tabela produtos={produtos}
          produtoSelecionado={produtoSelecionado}
          produtoExcluido={produtoExcluido}></Tabela>
      </Layout>
    </div>

  );
}
