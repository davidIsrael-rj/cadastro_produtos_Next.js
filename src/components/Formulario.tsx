import Produto from "@/core/Produto";
import Entrada from "./Entrada";
import { useState } from "react";
import { mascaraDados, precoSugerido } from "@/core/funcoes";

interface FormularioProps {
    produto: Produto
}
export default function Formulario(props: FormularioProps) {
    const id = props.produto?.id
    const [codBarra, setCodBarra] = useState(props.produto?.cod_barra ?? '')
    const [nome, setNome] = useState(props.produto?.nome ?? '')
    const [precVenda, setPreVenda] = useState(props.produto?.preco_venda ?? '')
    const [precCusto, setPrecCusto] = useState(props.produto?.preco_custo ?? '')
    const [alicota, setAlicota] = useState(props.produto?.alicota ?? '')
    const [margem, setMargem] = useState(props.produto?.margem ?? '')
    const [pSugerido, setPSugerido]=useState(precoSugerido(precCusto, margem))

    return (
        <div>
            <div className="flex justify-between items-center ">

                {id ? (
                    <Entrada texto="Código" valor={id} somenteLeitura />
                ) : false}
                <Entrada texto="Código Barra" valor={codBarra} classNam="flex-1" />
            </div>
            <Entrada texto="Nome" valor={nome} />

            <div className="flex justify-between items-center">

                <Entrada texto="Preço Venda" valor={mascaraDados(precVenda)} classNam="flex-1" />
                <Entrada texto="Preço Custo" valor={mascaraDados(precCusto)} classNam="flex-1" />
                <Entrada texto="Margem de Lucro" valor={margem} classNam="flex-1" />
                <Entrada texto="Preço Sugerido" 
                valor={pSugerido} 
                classNam={`flex-1 w-2`}/>
                <Entrada texto="Alicota" valor={alicota} classNam={`flex-1 `} />
            </div>
        </div>
    )
}