import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCliente from "./componentes/listaCliente";
import ListaProduto from "./componentes/listaProduto";
import { FormularioCadastroProduto } from "./componentes/formularioCadastroProduto";
import { FormularioCadastroCliente } from "./componentes/formularioCadastroCliente";
import { RegistroDeConsumo } from "./componentes/registroDeConsumo";


export function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaCliente/>} />
                <Route path="/lista-de-produtos" element={<ListaProduto/>}/>
                <Route path="/cadastro-produto" element= {<FormularioCadastroProduto/>}/>
                <Route path="/cadastro-cliente" element= {<FormularioCadastroCliente/>}/>
                <Route path="/registrar-consumo" element= {<RegistroDeConsumo/>}/>
            </Routes>
        </BrowserRouter>
    )
}