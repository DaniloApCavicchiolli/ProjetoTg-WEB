import React from 'react';
import { RiDeleteBin5Line, RiEditBoxFill } from "react-icons/ri";

import { Container, Body, Buttons } from './styles';

const CategoriasRow = ({ categorias, setUserSelected, setShowModalEdit, setBotao, setShowModalDelete }) => {
    const produtos = categorias.fk_produtos;
    const produto = produtos?.map((data) => {
        return data.nome
    });

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
                    <span>{produto.join(', ')} {!produto.length === 0 && '/'}</span>
                </Body>
                <Buttons>
                    <button style={{ color: "#F89747" }}
                        onClick={() => { setShowModalEdit(true); setUserSelected(categorias); setBotao(1) }}>
                        <RiEditBoxFill size={30} />
                    </button>
                    <button style={{ color: "#F26689" }}
                        onClick={() => { setShowModalDelete(true); setUserSelected(categorias); setBotao(1) }}
                    >
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default CategoriasRow;
