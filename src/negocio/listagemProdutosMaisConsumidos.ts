import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto";

export default class ListagemProdutosMaisConsumidos {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        this.clientes = clientes
    }
    public listarProdutosMaisConsumidos(): void {
        // Crie um mapa para contar quantos clientes consumiram cada produto.
        const produtosContagem = new Map<Produto, number>();
    
        // Itere sobre todos os clientes e seus produtos consumidos.
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (produtosContagem.has(produto)) {
                    produtosContagem.set(produto, produtosContagem.get(produto)! + 1);
                } else {
                    produtosContagem.set(produto, 1);
                }
            });
        });
    
        // Classifique os produtos com base na contagem em ordem decrescente.
        const produtosOrdenados = Array.from(produtosContagem.keys()).sort((a, b) => {
            return produtosContagem.get(b)! - produtosContagem.get(a)!;
        });
    
        // Exiba os produtos mais consumidos.
        console.log(`\nProdutos mais consumidos:`);
        produtosOrdenados.slice(0, 10).forEach((produto, index) => {
            console.log(`#${index + 1} - Nome: ${produto.getNome}, Quantidade de Consumidores: ${produtosContagem.get(produto)}`);
        });
    }
}