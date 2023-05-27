import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

import { Container, Body, Buttons } from './styles';

const SolicitacoesRow = ({ solicitacoes, setShowModalDelete }) => {

    return (
        <>
            <Container>
                <header>
                    <p>Id</p>
                    <span>{solicitacoes.id}</span>
                </header>
                <Body>
                    <p>Nome</p>
                    <span>{solicitacoes.nome}</span>
                </Body>
                <Body>
                    <p>Marca</p>
                    <span>{solicitacoes.marca}</span>
                </Body>
                <Body>
                    <p>Quantidade</p>
                    <span>{solicitacoes.quantidade}</span>
                </Body>
                <Body>
                    <p>Forma de Pagamento</p>
                    <span>{solicitacoes.forma_pagamento}</span>
                </Body>
                <Body>
                    <p>Data</p>
                    <span>{solicitacoes.date}</span>
                </Body>
                <Buttons>
                    {/* <button
                        style={{ color: "#F89747" }}
                        disabled={dataCreate !== 0 ? true : false}
                        onClick={() => { }}>
                        <RiEditBoxFill size={30} />
                    </button> */}
                    <button
                        style={{ color: "#F26689" }}
                        onClick={() => { setShowModalDelete(true) }}
                    >
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default SolicitacoesRow;
