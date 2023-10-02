import Entrada from "../io/entrada";
import cliente from "../modelo/cliente";
import Cliente from "../modelo/cliente";

export default class Editar{
    private cliente: Array<Cliente>
    private entrada: Entrada

    constructor(cliente: Array<Cliente>){
        this.cliente = cliente
        this.entrada = new Entrada
    }

    public editarCliente(id: number, updatedItem: Cliente): boolean {
        const index = this.cliente.findIndex((item) => cliente.id === id);
    if (index !== -1) {
        console.log(`Item encontrado: ${this.cliente[index].nome}`);
        console.log(`Opções disponíveis:`);
        console.log(`1. Alterar nome social`);
        
        const opcao = Number(prompt("Escolha a opção desejada (1/2/3): "));
        switch (opcao) {
            case 1:
              this.cliente[index].nome = updatedItem.nome;
              break;
            default:
              console.log("Opção inválida.");
              return false;
          }
          return true;
        }
        
        console.log(`Cliente com ID ${id} não encontrado.`);
        return false;
      }
            
}