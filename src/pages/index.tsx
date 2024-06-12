import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useProdutos from "@/hooks/useProdutos";


export default function Home() {

  const {
    tabelaVisivel,
    produto,
    produtos,
    excluirProduto,
    novoProduto,
    salvarProduto,
    exibirTabela,
    selecionarProduto
  } = useProdutos()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-green-500 via-yellow-600 to-blue-500
    `}>
      <Layout titulo="Cadastro de Produtos">
        {tabelaVisivel ? (
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
              produtoSelecionado={selecionarProduto}
              produtoExcluido={excluirProduto} />
          </>
        ) : (
          <Formulario
            produto={produto}
            produtoMudou={salvarProduto}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>

  );
}
