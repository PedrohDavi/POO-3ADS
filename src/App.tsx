import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCliente from "./componentes/listaCliente";
import ListaProduto from "./componentes/listaProduto";


export function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaCliente/>} />
                <Route path="/lista-de-produtos" element={<ListaProduto/>}/>
            </Routes>
        </BrowserRouter>
    )
}