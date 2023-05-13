import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

import { Container, Body, Buttons } from './styles';

const FornecedorProdutosRows = ({ produto }) => {
    const categoriasProdutos = produto.fk_categoria;
    const categorias = []

    categoriasProdutos?.forEach((item) => {
        return categorias.push(item.nome)
    });
    
    return (
        <>
            <Container>
                {/* <Body>
                    <img src='https://picsum.photos/200' />
                </Body> */}
                <header>
                    <p>Nome comercial</p>
                    <span>{produto.nome}</span>
                </header>
                <Body>
                    <p>Categoria</p>
                    <span>{categorias.join(', ')}</span>
                </Body>
                <Buttons>
                    <button style={{ color: "#F26689" }}
                        onClick={() => { }}>
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default FornecedorProdutosRows;
