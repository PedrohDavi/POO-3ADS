/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import BarraNavegacao from "./barraNavegacao";




const ListaCliente = () =>{
        return (
            <div>
                <BarraNavegacao/>
                <div className="collection">
                    <a className="collection-item">Cliente 1</a>
                    <a className="collection-item">Cliente 2</a>
                    <a className="collection-item">Cliente 3</a>
                    <a className="collection-item">Cliente 4</a>
                </div>
            </div> 
        )
}

export default ListaCliente;