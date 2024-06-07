import Produto from "@/core/Produto";
import Entrada from "./Entrada";
import { useState } from "react";
import { mascaraDados, precoSugerido } from "@/core/funcoes";
import Botao from "./Botao";

interface FormularioProps {
    produto: Produto
}
export default function Formulario(props: FormularioProps) {
    const id = props.produto?.id
    const [codBarra, setCodBarra] = useState(props.produto?.cod_barra ?? '0')
    const [nome, setNome] = useState(props.produto?.nome ?? '')
    const [precVenda, setPreVenda] = useState(props.produto?.preco_venda ?? 0)
    const [precCusto, setPrecCusto] = useState(props.produto?.preco_custo ?? 0)
    const [alicota, setAlicota] = useState(props.produto?.alicota ?? '18')
    const [margem, setMargem] = useState(props.produto?.margem ?? 40)

    return (
        <div>
            <div className="flex justify-between items-center ">

                {id ? (
                    <Entrada texto="Código" valor={id} somenteLeitura />
                ) : false}
                <Entrada texto="Código Barra" valor={codBarra} classNam="flex-1" valorMudou={setCodBarra} />
            </div>
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} />

            <div className="flex justify-between items-center">
                <Entrada texto="Preço Venda" valor={precVenda} valorMudou={setPreVenda} classNam="flex-1 w-2" />
                <Entrada texto="Preço Custo" valor={precCusto} valorMudou={setPrecCusto} classNam="flex-1 w-2" />
                <Entrada texto="Margem de Lucro" valor={margem} valorMudou={setMargem} classNam="flex-1 w-2" />
                <Entrada texto="Alicota" valor={alicota} valorMudou={setAlicota} classNam={`flex-1 w-2 `} />
            </div>
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao>
                    Cancelar
                </Botao>

            </div>
        </div>
    )
}