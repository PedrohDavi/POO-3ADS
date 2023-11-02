import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        if (!nome || nome.trim() === '') {
            console.log("Nome inválido. Por favor, forneça um nome válido.");
            return;
        }
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let sexo = this.entrada.receberTexto(`Por favor informe seu sexo (M para masculino F para feminino): `)
        if (sexo !== 'M' && sexo !== 'F') {
            console.log("Sexo inválido. Informe 'M' para masculino ou 'F' para feminino.");
            return;
        }
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        const cpfNumerico = valor.replace(/\D/g, '');
        if (cpfNumerico.length !== 11) {
            console.log("CPF inválido. Deve conter exatamente 11 dígitos numéricos.");
            return;
        }
        let data = this.entrada.receberTexto(`Por favor informe sua data de nascimento no padrão dd/mm/yyyy: `);
        let telefone = this.entrada.receberTexto(`Por favor informe um telefone para contato: `);
        if (!telefone || telefone.trim() === '') {
            console.log("Telefone inválido. Por favor, forneça um número de telefone válido.");
            return;
        }
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataNascimento = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataNascimento);
        let cliente = new Cliente(nome, nomeSocial, sexo, cpf, telefone);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}