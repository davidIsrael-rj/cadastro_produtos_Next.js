import Produto from "@/core/Produto";
import Entrada from "./Entrada";
import { useEffect, useState } from "react";
import { mascaraDados, precoSugerido } from "@/core/funcoes";
import Botao from "./Botao";

interface FormularioProps {
    produto: Produto
    produtoMudou?:(produto: Produto)=> void
    cancelado?: ()=> void
}
export default function Formulario(props: FormularioProps) {
    const id = props.produto?.id
    const [codBarra, setCodBarra] = useState(props.produto?.cod_barra ?? '0')
    const [nome, setNome] = useState(props.produto?.nome ?? '')
    const [precVenda, setPreVenda] = useState(props.produto?.preco_venda ?? 0)
    const [precCusto, setPrecCusto] = useState(props.produto?.preco_custo ?? 0)
    const [alicota, setAlicota] = useState(props.produto?.alicota ?? '18')
    const [margem, setMargem] = useState(props.produto?.margem ?? 40)
    const [precSugerido, setPrecSugerido] = useState(0)


    useEffect(() => {
        const calcularPrecoSugerido = (preCusto, margem) => {
            const numbPC = parseFloat(preCusto)
            const numbM = parseFloat(margem)
            // console.log(typeof (numbPC), typeof (numbM))

            const valor = (((numbPC * numbM) / 100) + numbPC);

            return valor.toFixed(2)
        };

        const resultado = +calcularPrecoSugerido(precCusto, margem);
        setPrecSugerido(resultado);
    }, [precCusto, margem]);


    function corPS(pV, pS) {
        const precV = parseFloat(pV)
        const precS = parseFloat(pS)

        if (precV > precS) {
            return "text-green-600"
        } else if (precV === precS) {
            return "text-blue-600"
        } else {
            return "text-red-600"
        }
    }

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
                <Entrada texto="Preço Venda" tipo="number" valor={precVenda} valorMudou={setPreVenda} classNam="flex-1 w-2" />
                <Entrada texto="Preço Custo" tipo="number" valor={precCusto} valorMudou={setPrecCusto} classNam="flex-1 w-2" />
                <Entrada texto="Margem de Lucro" tipo="number" valor={margem} valorMudou={setMargem} classNam="flex-1 w-2" />
                <Entrada texto="Preço Sugerido" tipo="number" valor={precSugerido} classNam={`flex-1 w-2 ${corPS(precVenda, precSugerido)}`} />
                <Entrada texto="Alicota" valor={alicota} valorMudou={setAlicota} classNam={`flex-1 w-2 `} />
            </div>
            
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.produtoMudou?.(new Produto(codBarra, nome,precVenda, precCusto, margem, alicota, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>

            </div>
        </div>
    )
}