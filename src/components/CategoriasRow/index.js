import React from 'react';
import { RiDeleteBin5Line, RiEditBoxFill } from "react-icons/ri";

import { Container, Body, Buttons } from './styles';

const CategoriasRow = ({ categorias }) => {

    // const produtos = categorias.fk_produtos;
    // const insumos = categorias.fk_insumos;

    // const produto = produtos?.map((data) => {
    //     return data.nome
    // });
    // const insumo = insumos?.map((data) => {
    //     return data.nome
    // });

    return (
        <>
            <Container>
                {/* <Body>
                    <img src='https://picsum.photos/200' />
                </Body> */}
                <header>
                    <p>Categoria</p>
                    <span>{categorias.nome}</span>
                </header>
                <Body style={{ textAlign: 'start' }}>
                    <p>Produtos Vinculados</p>
                    <span>Produtos</span>
                    {/* <span>{produto.join(', ')} {!produto.length == 0 && '/'} {insumo.join(', ')}</span> */}
                </Body>
                <Buttons>
                    <button style={{ color: "#F89747" }}
                        onClick={() => { }}>
                        <RiEditBoxFill size={30} />
                    </button>
                    <button style={{ color: "#F26689" }}
                        onClick={() => { }}
                    >
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default CategoriasRow;
