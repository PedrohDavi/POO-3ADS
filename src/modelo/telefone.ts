import Entrada from "../io/entrada"

export default class Telefone {
    private ddd: string
    private numero: string
    private entrada: Entrada
    constructor(ddd: string, numero: string) {

        this.ddd = ddd
        this.numero = numero
        this.entrada = new Entrada()
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }

    public cadastroTelefone(ddd, numero): void {
        console.log(`\nInício do cadastro de telefones para contato`);
        let Ddd = this.entrada.receberTexto(`Por favor informe seu ddd: `)
        let Numero = this.entrada.receberTexto(`Por favor informe seu numero(sem o ddd): `)
        
    }
}