import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCliente from "./componentes/listaCliente";
import ListaProduto from "./componentes/listaProduto";
import FormularioCadastroCliente from "./componentes/formularioCadastroCliente";
import FormularioCadastroProduto from "./componentes/formularioCadastroProduto";

export function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaCliente/>} />
                <Route path="/lista-de-produtos" element={<ListaProduto/>}/>
                <Route path="/cadastro-de-clientes" element={<FormularioCadastroCliente/>}/>
                <Route path="/cadastro-de-produtos" element={<FormularioCadastroProduto/>}/>
            </Routes>
        </BrowserRouter>
    )
}