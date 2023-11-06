/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



 class BarraNavegacao extends Component {
    render() {
        return (
          <Flex>
            <Box bg={"#808080"} width={"100%"} height={"4.5rem"} display={"flex"}justifyContent="right">
              <Link to="/">
                  <Text paddingRight={"1.5rem"}>Lista de Clientes</Text>
              </Link>
              <Link to="/lista-de-produtos">
                  <Text paddingRight={"1.5rem"}>Lista de produtos</Text>
              </Link>
              <Link to="/cadastro-de-clientes">
                <Text paddingRight={"1.5rem"}>Cadastrar cliente</Text>
              </Link>
              <Link to="/cadastro-de-produtos">
                <Text paddingRight={"1.5rem"}>Cadastrar Produto</Text>
              </Link>
                <Text paddingRight={"1.5rem"}>Registrar consumo</Text>
            </Box>
          </Flex>
        );
      }
    }

export default BarraNavegacao;