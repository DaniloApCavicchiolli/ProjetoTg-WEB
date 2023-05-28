import React, { useRef, useState } from "react";
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

import { Container, Forms, Body, Content, Column, Image, Buttons } from "./styles";

function ModalEdit({ setShowModalEdit, item }) {
    const formRef = useRef(null);
    const [disable, setDisable] = useState(false);

    return (
        <Container>
            <Body>
                <div>
                    <Image style={{ background: 'transparent' }} />
                    <h1>Editar Cotação</h1>
                    <Image />
                </div>
                <p>Confira os dados abaixo</p>
                <Forms ref={formRef} onSubmit={() => { setShowModalEdit(false) }}
                    initialData={{ ...item, value: `R$ ` + item.value }}>
                    <Content>
                        <Column>
                            <div>
                                <span>Produto</span>
                                <Input
                                    name="nome"
                                    placeholder="Nome do produto"
                                    icon={RiInboxArchiveLine}
                                    disabled={disable}
                                />
                            </div>
                            <div>
                                <span>Marca</span>
                                <Input
                                    name="marca"
                                    placeholder="Marca do produto"
                                    icon={RiPriceTag2Line}
                                    disabled={disable}
                                />
                            </div>
                            <div>
                                <span>Quantidade</span>
                                <Input
                                    name="quantidade"
                                    placeholder="Quantidade"
                                    icon={RiStackLine}
                                    disabled={disable}
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
                                    disabled={disable}
                                />
                            </div>
                            <div>
                                <span>Data</span>
                                <Input
                                    name="date"
                                    placeholder="Data Solicitação"
                                    icon={RiCalendarTodoLine}
                                    disabled={disable}
                                />
                            </div>
                            {item.value &&
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