import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import BarraNavegacao from "./barraNavegacao";

class Listagens extends React.Component{
    render() {
        return(
            <div>
            <BarraNavegacao/>
            <Menu>
                <MenuButton as={Button} width={"8rem"} height={"4rem"} bg={"#ffbf00"} borderRadius={"0.5rem"}>Listagens</MenuButton>
                    <MenuList>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Clientes que mais consumiram produtos</MenuItem>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Clientes que menos consumiram produtos</MenuItem>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Clientes que mais gastaram</MenuItem>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Clientes por gênero</MenuItem>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Produtos mais consuimdos</MenuItem>
                        <MenuItem bg={"#ffbf00"} borderRadius={"0.5rem"}>Produtos mais consumidos por gênero</MenuItem>
                    </MenuList>
            </Menu>
            </div>
        )
    }
}

export default Listagens;