import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone";

let proximoId = 1;

export default class Cliente {
    private id: number
    private nome: string
    private nomeSocial: string
    readonly sexo: string
    private cpf: CPF
    private rgs: RG
    private dataCadastro: Date
    private telefone: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, sexo: string, cpf: CPF, rgs: RG, telefone: Array<Telefone>) {
        this.id = proximoId++
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.sexo = sexo
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefone = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getId(): number{
        return this.id
    }
    public get getNome(): string{
        return this.nome
    }
    public get getNomeSocial(): string{
        return this.nomeSocial
    }
    public get getSexo(): string{
        return this.sexo
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): RG {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefone
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }


      // Método para atualizar apenas nome, nome social e telefone
    public atualizarDados(nome: string, nomeSocial: string, telefone: Array<Telefone>): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.telefone = [];
  }

    public adicionarProduto(produto: Produto){
        this.produtosConsumidos.push(produto)
    }
}