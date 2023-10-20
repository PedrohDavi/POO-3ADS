import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listarTodos(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Id: ` + cliente.getId);
            console.log(`Nome: ` + cliente.getNome);
            console.log(`Nome social: ` + cliente.getNomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Sexo: ` + cliente.sexo);
            console.log(`Telefone: ` + cliente.getTelefones);

            console.log(`Produtos consumidos: \n`);
            cliente.getProdutosConsumidos.forEach(produto => {
            console.log(`ID: ${produto.getId}, Nome: ${produto.getNome}, Preço: ${produto.getPreco}`);
            console.log(`-------------------------------------- \n`);
        });
    });
    console.log(`\n`);
    }

    public listar10ClientesPorConsumo(): void{
        // Classifique os clientes com base na quantidade de produtos consumidos em ordem decrescente.
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length;
        });

        // Pegue os 10 primeiros clientes da lista classificada.
        const top10Clientes = clientesOrdenados.slice(0, 10);

        console.log(`\nTop 10 clientes que mais consumiram produtos:`);
        top10Clientes.forEach((cliente, index) => {
            console.log(`#${index + 1} - Nome: ${cliente.getNome}, Quantidade de Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }

    public listarClientesMenosConsumidores(): void {
        // Classifique os clientes com base na quantidade de produtos consumidos em ordem crescente.
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            return a.getProdutosConsumidos.length - b.getProdutosConsumidos.length;
        });

        // Pegue os 10 primeiros clientes da lista classificada, que são os que menos consumiram produtos.
        const clientesMenosConsumidores = clientesOrdenados.slice(0, 10);

        console.log(`\nTop 10 clientes que menos consumiram produtos:`);
        clientesMenosConsumidores.forEach((cliente, index) => {
            console.log(`#${index + 1} - Nome: ${cliente.getNome}, Quantidade de Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }

    public listarClientesPorGenero(genero: string): void {
        const clientesPorGenero = this.clientes.filter(cliente => cliente.sexo === genero);

        console.log(`Clientes do gênero ${genero}:`);
        clientesPorGenero.forEach(cliente => {
            console.log(`Nome: ${cliente.getNome}`);
            console.log(`Nome Social: ${cliente.getNomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`Sexo: ${cliente.sexo}`);
            console.log(`Telefone: ${cliente.getTelefones}`);
            console.log(`--------------------------------------`);
        });
    }
}