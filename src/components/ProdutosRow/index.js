import React from 'react';
import { RiDeleteBin5Line, RiEditBoxFill } from "react-icons/ri";

import { Container, Body, Buttons } from './styles';

const ProdutosRow = ({ produtos, setShowModalDelete, setShowModalEdit, setUserSelected, setBotao }) => {
    const categorias = produtos.fk_categoria;
    const categoria = categorias.map((data) => {
        return data.nome
    });

    return (
        <>
            <Container>
                {/* <Body>
                    <img src='https://picsum.photos/200' />
                </Body> */}
                <header>
                    <p>Produto</p>
                    <span>{produtos.nome}</span>
                </header>
                <Body>
                    <p>Marca</p>
                    <span>{produtos.marca}</span>
                </Body>
                <Body>
                    <p>Categorias Vinculadas</p>
                    <span>{categoria?.join(', ')}</span>
                </Body>
                {/* <Body>
                    <button>Ver mais detalhes</button>
                </Body> */}
                <Buttons>
                    <button style={{ color: "#F89747" }}
                        onClick={() => { setShowModalEdit(true); setUserSelected(produtos); setBotao(2) }}>
                        <RiEditBoxFill size={30} />
                    </button>
                    <button style={{ color: "#F26689" }}
                        onClick={() => { setShowModalDelete(true); setUserSelected(produtos); setBotao(2) }}
                    >
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default ProdutosRow;
