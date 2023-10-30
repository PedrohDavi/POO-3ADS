import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";

type state = {
    tela: string
    tela2: string
    tela3: string
    tela4: string
    tela5: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes',
            tela2: 'Produtos',
            tela3: 'CadastroCliente',
            tela4: 'CadastroProduto',
            tela5: 'RegistrarConsumo'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let telaRenderizada;
      
        if (this.state.tela === 'Clientes') {
          telaRenderizada = <ListaCliente tema="purple lighten-4" />;
        } else if (this.state.tela === 'Produtos') {
          telaRenderizada = <ListaProduto tema="purple lighten-4" />;
        } else if (this.state.tela3 === 'CadastroCliente') {
          telaRenderizada = <FormularioCadastroCliente tema="purple lighten-4" />;
        } else if(this.state.tela5 === 'CadastroProduto'){
            telaRenderizada = <FormularioCadastroProduto tema="purple lighten-4" />
        } else {
          telaRenderizada = (
            <div className="container">
              <h1>Página não encontrada</h1>
              <p>A tela especificada não existe.</p>
            </div>
          );
        }
      
        return (
          <>
            <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Cadastro de Clientes', 'Cadastro de Produtos', 'Registrar Consumo']} />
            {telaRenderizada}
          </>
        );
      }
}