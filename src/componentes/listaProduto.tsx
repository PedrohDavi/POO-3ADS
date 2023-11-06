import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import BarraNavegacao from './barraNavegacao';



export default class ListaProduto extends React.Component {
    render() {
        return (
            <div>
                <BarraNavegacao/>
                    <div className="collection">
                        <a className="collection-item">Produto 1</a>
                        <a className="collection-item">Produto 2</a>
                        <a className="collection-item">Produto 3</a>
                        <a className="collection-item">Produto 4</a>
                    </div>
            </div>
        )
    }
}