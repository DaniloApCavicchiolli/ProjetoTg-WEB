import React, { useState, useEffect } from 'react'
import { Container, Body, Image } from './styles';
import { getNivel } from "../../services/auth";
import { format } from 'date-fns';

const EnviadosRow = ({ enviados }) => {
    const nivel = getNivel();

    let data = {
        id: 1,
        valor: 400,
        createdAt: "2023-06-13T01:26:01.000Z",
        fk_solicitacao: {
            id: 1,
            nome: "Produto",
            marca: "Marca",
            quantidade: "20",
            forma_pagamento: "Cartão"
        },
        fk_fornecedor: {
            id: 3,
            name: "TesteFornecedor",
            email: "teste@teste.com",
            telefone: "",
            cidade: "Cidade Fornecedor",
            endereco: "Enderço Forneedor"
        }
    }

    return (
        <>
            <Container>
                {/* <Body>
                    <Image
                        style={{cursor: 'pointer'}}
                        src={imagem}
                        onClick={() => {setShowModalProvider(true); setUserSelected(enviados)}}
                    />
                </Body> */}
                <Body>
                    <p>Nome</p>
                    <span>{enviados.fk_solicitacao.nome}</span>
                </Body>
                <Body>
                    <p>Marca</p>
                    <span>{enviados.fk_solicitacao.marca}</span>
                </Body>
                {nivel === '999' && <Body>
                    <p>Fornecedor</p>
                    <span>{enviados.fk_fornecedor.name}</span>
                </Body>}
                <Body>
                    <p>Total Orçado</p>
                    <span>R$ {enviados.valor.toFixed(2)}</span>
                </Body>
                <Body>
                    <p>Data da Resposta</p>
                    <span>{format(new Date(enviados.createdAt), 'dd/MM/yyyy')}</span>
                </Body>
                {/* <Body>
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => { }}
                    >
                        {"ººº"}
                    </span>
                </Body> */}
            </Container>
        </>
    )
}

export default EnviadosRow;
