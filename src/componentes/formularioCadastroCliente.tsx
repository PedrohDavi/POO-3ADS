import React from "react";
import BarraNavegacao from "./barraNavegacao";
import { Input } from "@chakra-ui/react";



export default class FormularioCadastroCliente extends React.Component {
    
    render() {
        return (
            <div>
            <BarraNavegacao/>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='Nome' />
                        </div>
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='Sobrenome' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='Telefone' />
                        </div>
                        <div className="input-field col s6">
                            <Input variant='flushed' placeholder='E-mail' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button  type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}