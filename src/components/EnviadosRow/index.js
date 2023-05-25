import React, { useState, useEffect } from 'react'
import { Container, Body, Image } from './styles';
import { getNivel } from "../../services/auth";

const EnviadosRow = ({ enviados }) => {
    const nivel = getNivel();

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
                    <span>{enviados.nome}</span>
                </Body>
                <Body>
                    <p>Marca</p>
                    <span>{enviados.marca}</span>
                </Body>
                {nivel === '999' && <Body>
                    <p>Fornecedor</p>
                    <span>{enviados.fornecedor}</span>
                </Body>}
                <Body>
                    <p>Total Orçado</p>
                    <span>R$ {enviados.valor.toFixed(2)}</span>
                </Body>
                <Body>
                    <p>Data da Resposta</p>
                    <span>{enviados.date}</span>
                </Body>
                <Body>
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => { }}
                    >
                        {"ººº"}
                    </span>
                </Body>
            </Container>
        </>
    )
}

export default EnviadosRow;
