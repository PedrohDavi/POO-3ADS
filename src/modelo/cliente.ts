import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

let proximoId = 1;

export default class Cliente {
    public id: number
    public nome: string
    public nomeSocial: string
    public sexo: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefone: number
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    static id: number
    constructor(nome: string, nomeSocial: string, sexo: string, cpf: CPF, telefone: number) {
        this.id = proximoId++
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.sexo = sexo
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefone = telefone
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): number {
        return this.telefone
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}