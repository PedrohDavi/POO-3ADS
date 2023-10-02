let proximoId = 1;

export default class Produto {
    public id: number
    public nome: string
    public preco:number

    constructor(nome:string, preco:number){
        this.id = proximoId++
        this.nome = nome;
        this.preco = preco;
    }
}