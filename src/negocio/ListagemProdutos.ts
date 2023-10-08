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
            console.log(`Id: ` + produtos.getId);
            console.log(`Nome do produto: ` + produtos.getNome);
            console.log(`Preço: ` + produtos.getPreco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}