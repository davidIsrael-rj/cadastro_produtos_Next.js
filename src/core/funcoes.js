function limparDados (dadosBrutos) {
       const strig = dadosBrutos.toString()    
    const resultado = strig.replace("R$", "").trim()
    const resultado1 = resultado.replace(',', '.')
    return parseInt(resultado1)
}

export const mascaraDados = (dados) => {
    const dados1 = limparDados(dados)
    const resultado = (`R$ ${((dados1).toFixed(2)).replace('.', ',')}`)
    return resultado
}

export const precoSugerido = (preCusto, margem) => {
    const precSug = (((preCusto * margem) / 100) + preCusto)
    // const resultado = (precSug.toFixed(2))
    return precSug
}