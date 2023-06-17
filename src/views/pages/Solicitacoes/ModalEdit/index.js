import React, { useRef, useState, useContext } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import {
    RiInboxArchiveLine,
    RiHandCoinLine,
    RiHotelLine,
    RiPriceTag2Line,
    RiDraftLine,
    RiStackLine,
    RiWallet3Line,
    RiHandHeartLine,
    RiRoadMapLine,
    RiCommunityLine,
    RiMoneyDollarBoxLine,
    RiCalendarTodoLine,
    RiBubbleChartLine,
    RiMoneyDollarCircleLine
} from "react-icons/ri";

import { format } from 'date-fns'
import { ContextSolicitacao } from "../../../../contexts/SolicitacoesContext";

import { Container, Forms, Body, Content, Column, Image, Buttons } from "./styles";

function ModalEdit({ setShowModalEdit, item, loadSolicitacoes }) {
    const formRef = useRef(null);
    const { updateSolicitacao } = useContext(ContextSolicitacao);
    const [disable, setDisable] = useState(false);

    const valor = item?.fk_cotacao[0].valor
    const data = item?.fk_cotacao[0].created_at
    const cotacaoId = item?.fk_cotacao[0].id

    const handleSubmit = async (data) => {
        try {
            const valor = {
                valor: parseFloat(data.value.replace(/\D/g, ""))
            }
            await updateSolicitacao(valor, cotacaoId);
            setShowModalEdit(false);
            loadSolicitacoes();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <Body>
                <div>
                    <Image style={{ background: 'transparent' }} />
                    <h1>Editar Cotação</h1>
                    <Image />
                </div>
                <p>Confira os dados abaixo</p>
                <Forms ref={formRef} onSubmit={handleSubmit}
                    initialData={{ ...item, value: `R$ ` + valor, date: format(new Date(data), 'dd/MM/yyyy') }}>
                    <Content>
                        <Column>
                            <div>
                                <span>Produto</span>
                                <Input
                                    name="nome"
                                    placeholder="Nome do produto"
                                    icon={RiInboxArchiveLine}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <span>Marca</span>
                                <Input
                                    name="marca"
                                    placeholder="Marca do produto"
                                    icon={RiPriceTag2Line}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <span>Quantidade</span>
                                <Input
                                    name="quantidade"
                                    placeholder="Quantidade"
                                    icon={RiStackLine}
                                    disabled={true}
                                />
                            </div>
                        </Column>
                        <Column>
                            <div>
                                <span>Forma de Pagamento</span>
                                <Input
                                    name="forma_pagamento"
                                    placeholder="Forma de Pagamento"
                                    icon={RiWallet3Line}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <span>Data</span>
                                <Input
                                    name="date"
                                    placeholder="Data Solicitação"
                                    icon={RiCalendarTodoLine}
                                    disabled={true}
                                />
                            </div>
                            {valor &&
                                <div>
                                    <span style={{ padding: 5 }}>Valor</span>
                                    <Input
                                        name="value"
                                        placeholder="Valor do orçamento"
                                        disabled={disable}
                                        icon={RiMoneyDollarCircleLine}
                                    />
                                </div>}
                        </Column>
                    </Content>
                    <div id="button" style={{ backgroundColor: "#FFF" }}>
                        <Button style={{ fontSize: '18px', width: "30%" }}  >
                            Enviar
                        </Button>
                    </div>
                </Forms>
                <a href="#" onClick={() => setShowModalEdit(false)} >
                    Cancelar
                </a>
            </Body>
        </Container>
    );
}

export default ModalEdit;