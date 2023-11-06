import React, { Component } from 'react';
import {
  Box,
  Select,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import BarraNavegacao from './barraNavegacao';

class RegistroDeConsumo extends React.Component {

  render() {

    return (
        <div>
        <BarraNavegacao/>
        <Box p={4}>
        <h2>Registro de Consumo de Produtos por Clientes</h2>

        <Select
          placeholder="Selecione o Cliente"
          mb={4}
        >
          {/* Renderize opções de clientes aqui */}
        </Select>

        <Select
          placeholder="Selecione o Produto"
          mb={4}
        >
          {/* Renderize opções de produtos aqui */}
        </Select>

        <Input
          type="number"
          mb={4}
          placeholder="Quantidade"
        />

        <Button colorScheme="teal">
          Adicionar Consumo
        </Button>

        <Table mt={4}>
          <Thead>
            <Tr>
              <Th>Cliente</Th>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
            </Tr>
          </Thead>
          <Tbody>
              <Tr>
                <Td>João</Td>
                <Td>Shampoo</Td>
                <Td>2</Td>
              </Tr>
              <Tr>
                <Td>Pedro</Td>
                <Td>Gel de cabelo</Td>
                <Td>1</Td>
              </Tr>
              <Tr>
                <Td>Marcia</Td>
                <Td>Unha postiça</Td>
                <Td>10</Td>
              </Tr>
            
          </Tbody>
        </Table>
      </Box>
      </div>
    );
  }
}

export default RegistroDeConsumo;