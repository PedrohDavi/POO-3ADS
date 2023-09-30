import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produtos => {
            console.log(`Nome do produto: ` + produtos.nome);
            console.log(`Preço: ` + produtos.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}