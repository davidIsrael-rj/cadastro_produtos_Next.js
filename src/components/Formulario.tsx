import Produto from "@/core/Produto";
import Entrada from "./Entrada";
import { useState } from "react";

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
    
    return (
        <div>
            <div className="flex justify-evenly ">

            {id ? (
                <Entrada texto="Código" valor={id}/>
            ):false}
            <Entrada texto="Código Barra" valor={codBarra}/>
            </div>
            <Entrada texto="Nome" valor={nome}/>

            <div className="flex justify-between">

            <Entrada texto="Preço Venda" valor={precVenda}/>
            <Entrada texto="Preço Custo" valor={precCusto}/>
            <Entrada texto="Margem de Lucro" valor={margem}/>
            <Entrada texto="Alicota" valor={alicota}/>
            </div>
        </div>
    )
}