export const mascaraDados = (dados)=>{
    const resultado = (`R$ ${((dados).toFixed(2)).replace('.', ',')}`)
    return resultado
}

export const  precoSugerido = (preCusto, margem) =>{
    const precSug = (((preCusto * margem) / 100) + preCusto)
    const resultado = `R$ ${(precSug.toFixed(2)).replace('.', ',')}`
    return resultado
}