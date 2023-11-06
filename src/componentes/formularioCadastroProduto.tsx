import React from "react";
import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import { Button, Input } from "@chakra-ui/react";



export default class FormularioCadastroProduto extends React.Component {
    
    render() {
        return (
        <div>
            <BarraNavegacao/>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='Produto' />
                        </div>
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='Preço' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Button type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}