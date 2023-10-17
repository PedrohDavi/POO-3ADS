import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import ListagemProdutos from "../negocio/ListagemProdutos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar cliente`);
    console.log(`4 - Excluir cliente`);
    console.log(`5 - Cadastrar produtos`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar produto`);
    console.log(`8 - Excluir produto`);
    console.log(`9 - Consumir produto`);
    
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            const idEditarCliente = entrada.receberNumero("Digite o ID do cliente que deseja editar: ");
            const clienteExistente = empresa.getClientes.find((cliente) => cliente.getId === idEditarCliente);
              
            if (clienteExistente) {
                const nomeNovo = entrada.receberTexto(`Digite o novo nome (${clienteExistente.getNome}): `) || clienteExistente.getNome;
                const nomeSocialNovo = entrada.receberTexto(`Digite o novo nome social (${clienteExistente.getNomeSocial}): `) || clienteExistente.getNomeSocial;
                const telefoneNovo = entrada.receberNumero(`Digite o novo telefone (${clienteExistente.getTelefones}): `) || clienteExistente.getTelefones;
              
                // Atualize os dados do cliente diretamente
                clienteExistente.atualizarDados(nomeNovo, nomeSocialNovo, telefoneNovo);
              
                  console.log("Cliente atualizado com sucesso!");
                } else {
                  console.log(`Cliente com ID ${idEditarCliente} não encontrado.`);
                }
                break;
        case 4:
            const idExcluirCliente = entrada.receberNumero("Digite o ID do cliente que deseja excluir: ");
            const clienteIndex = empresa.getClientes.findIndex((cliente) => cliente.getId === idExcluirCliente);
                  
            if (clienteIndex !== -1) {
                const clienteExcluido = empresa.getClientes.splice(clienteIndex, 1)[0];
                console.log(`Cliente com ID ${clienteExcluido.getId} foi excluído com sucesso.`);
                    } else {
                console.log(`Cliente com ID ${idExcluirCliente} não encontrado.`);
                    }
                    break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            const idEditarProduto = entrada.receberNumero("Digite o ID do produto que deseja editar: ");
            const produtoExistente = empresa.getProdutos.find((produto) => produto.getId === idEditarProduto);
              
            if (produtoExistente) {
                const nomeNovo = entrada.receberTexto(`Digite o novo nome (${produtoExistente.getNome}): `) || produtoExistente.getNome;
                const precoNovo = entrada.receberNumero(`Digite o novo preço (${produtoExistente.getPreco}): `) || produtoExistente.getPreco;
              
                // Atualize os dados do produto diretamente
                produtoExistente.atualizarDados(nomeNovo, precoNovo);
              
                  console.log("Produto atualizado com sucesso!");
                } else {
                  console.log(`Produto com ID ${idEditarProduto} não encontrado.`);
                }
                break;
        case 8: 
        const idExcluirProduto = entrada.receberNumero("Digite o ID do produto que deseja excluir: ");
        const produtoIndex = empresa.getProdutos.findIndex((produto) => produto.getId === idExcluirProduto);
              
        if (produtoIndex !== -1) {
            const produtoExcluido = empresa.getProdutos.splice(produtoIndex, 1)[0];
            console.log(`Produto com ID ${produtoExcluido.getId} foi excluído com sucesso.`);
                } else {
            console.log(`Produto com ID ${idExcluirProduto} não encontrado.`);
                }
                break;
                case 9:
                    const idCliente = entrada.receberNumero(`Digite o id do cliente que irá consumir um produto: `);
                    const clienteExist = empresa.getClientes.find((cliente) => cliente.getId === idCliente);
                  
                    if (clienteExist) {
                      const produtoId = entrada.receberNumero(`Digite o ID do produto que deseja adicionar ao cliente: `);
                      const produto = empresa.getProdutos.find((p) => p.getId === produtoId);
                  
                      if (produto) {
                        clienteExist.adicionarProduto(produto); 
                        console.log(`Produto adicionado ao cliente com sucesso.`);
                      } else {
                        console.log(`Produto não encontrado.`);
                      }
                    } else {
                      console.log(`Cliente não encontrado.`);
                    }
                    break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}