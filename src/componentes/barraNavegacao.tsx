/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";



 class BarraNavegacao extends Component {
    render() {
        return (
          <Flex>
            <Box bg={"#808080"} width={"100%"} height={"4.5rem"} display={"flex"}>
                <Text paddingRight={"1.5rem"}>Botão 1</Text>
                <Text paddingRight={"1.5rem"}>Botão 2</Text>
                <Text paddingRight={"1.5rem"}>Botão 3</Text>
                <Text paddingRight={"1.5rem"}>Botão 4</Text>
                <Text paddingRight={"1.5rem"}>Botão 5</Text>
            </Box>
          </Flex>
        );
      }
    }

export default BarraNavegacao;