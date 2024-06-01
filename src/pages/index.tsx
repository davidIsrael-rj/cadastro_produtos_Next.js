import Layout from "@/components/Layout";

export default function Home() {
  return (

    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-green-500 via-yellow-600 to-blue-500
    `}>
      <Layout titulo="Cadastro de Produtos">
        <span>Conteudo</span>
      </Layout>
    </div>

  );
}
