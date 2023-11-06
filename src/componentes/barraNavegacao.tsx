/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



 class BarraNavegacao extends Component {
    render() {
        return (
          <Flex>
            <Box bg={"#ffff00"} width={"100%"} height={"4.5rem"} display={"flex"}justifyContent="right">
              <Link to="/">
                  <Text paddingRight={"1.5rem"} color={"#000000"}>Lista de Clientes</Text>
              </Link>
              <Link to="/lista-de-produtos">
                  <Text paddingRight={"1.5rem"} color={"#000000"}>Lista de produtos</Text>
              </Link>
              <Link to="/cadastro-de-clientes">
                <Text paddingRight={"1.5rem"} color={"#000000"}>Cadastrar cliente</Text>
              </Link>
              <Link to="/cadastro-de-produtos">
                <Text paddingRight={"1.5rem"} color={"#000000"}>Cadastrar Produto</Text>
              </Link>
              <Link to="/registro-de-consumo">
                <Text paddingRight={"1.5rem"} color={"#000000"}>Registrar consumo</Text>
              </Link>
              <Link to="/listagens">
                <Text paddingRight={"1.5rem"} color={"#000000"}>Listagens</Text>
              </Link>
            </Box>
          </Flex>
        );
      }
    }

export default BarraNavegacao;