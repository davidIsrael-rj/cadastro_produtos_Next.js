export default class Produto {
    #id: string
    #cod_barra: string
    #nome: string
    #preco_venda: number
    #preco_custo: number
    #margem: number
    #alicota: string

    constructor(cod_barra: string, nome: string, preco_venda: number, preco_custo: number, margem: number, alicota: string, id: string = null) {
        this.#cod_barra = cod_barra
        this.#nome = nome
        this.#preco_venda = preco_venda
        this.#preco_custo = preco_custo
        this.#margem = margem
        this.#alicota = alicota
        this.#id = id
    }

    static vazio(){
        return new Produto("","",0.01, 0.01, 40,"I")
    }

    get id() {
        return this.#id
    }

    get cod_barra() {
        return this.#cod_barra
    }

    get nome() {
        return this.#nome
    }

    get preco_venda() {
        return this.#preco_venda
    }

    get preco_custo() {
        return this.#preco_custo
    }

    get margem() {
        return this.#margem
    }

    get alicota(){
        return this.#alicota
    }

}