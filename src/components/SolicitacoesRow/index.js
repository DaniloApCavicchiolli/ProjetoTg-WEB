import React, { useState } from 'react';
import { RiDeleteBin5Line, RiEditBoxFill, RiCheckboxCircleLine } from "react-icons/ri";
import { getNivel } from "../../services/auth";
import { toast } from "react-toastify";
import { format } from 'date-fns';

import { Container, Body, Buttons } from './styles';

const SolicitacoesRow = ({ solicitacoes, setItemSelected, setShowModalDelete, setShowModalEdit }) => {
    const nivel = getNivel();
    const [valor, setValor] = useState('');

    const valorRespondido = solicitacoes?.fk_cotacao;
    const valorRespondidos = valorRespondido?.map((data) => {
        return data.valor
    });
    const fornecedor = valorRespondido?.map((data) => {
        return data.fk_fornecedor.name
    });

    const handleModalDelte = () => {
        if (solicitacoes.value || nivel === '999') {
            setShowModalDelete(true);
        } else {
            toast.error("Cotação não realizada");
        }
    }

    const handleModalEdit = () => {
        if (solicitacoes.value) {
            setShowModalEdit(true);
        } else {
            toast.error("Cotação não realizada");
        }
    }

    return (
        <>
            <Container>
                {nivel === '999' && fornecedor.length > 0 &&
                    <header>
                        <p>Fornecedor</p>
                        <span>{fornecedor}</span>
                    </header>}
                <header>
                    <p>Nome</p>
                    <span>{solicitacoes.nome}</span>
                </header>
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
                    <span>{format(new Date(solicitacoes.createdAt), 'dd/MM/yyyy')}</span>
                </Body>
                <Body>
                    <p>Valor</p>
                    <div>
                        <p>R$</p>
                        <input
                            value={valorRespondidos || valor}
                            type={'number'}
                            onChange={(e) => setValor(e.target.value)}
                            style={{ paddingLeft: '5px', outline: 0, backgroundColor: 'white', borderRadius: 10 }}
                            disabled={valorRespondidos ? true : false}
                        />
                    </div>
                </Body>
                <Body>
                    {!solicitacoes.value
                        ?
                        <button onClick={() => { }}>
                            Cotar
                        </button>
                        :
                        <RiCheckboxCircleLine size={30} style={{ color: "#559B2D" }} />
                    }
                </Body>
                <Buttons>
                    <button
                        style={{ color: "#F89747" }}
                        onClick={() => { setItemSelected(solicitacoes); handleModalEdit() }}>
                        <RiEditBoxFill size={30} />
                    </button>
                    <button
                        style={{ color: "#F26689" }}
                        onClick={() => { handleModalDelte() }}
                    >
                        <RiDeleteBin5Line size={30} />
                    </button>
                </Buttons>
            </Container>
        </>
    )
}

export default SolicitacoesRow;
