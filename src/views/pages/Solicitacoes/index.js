import React, { useState, useEffect } from "react";
import {
    RiSearchLine
} from "react-icons/ri";

import SolicitacoesRow from "../../../components/SolicitacoesRow";
import Pagination from '@mui/material/Pagination';

import { Container, Content, Filtro, Buscar } from "./styles";

const solicitacoesData = [
    {
        nome: 'Produto 1',
        marca: 'Marca 1',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '20/05/2023'
    },
    {
        nome: 'Produto 2',
        marca: 'Marca 2',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '22/05/2023'
    },
    {
        nome: 'Produto 2',
        marca: 'Marca 2',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '23/05/2023'
    },
    {
        nome: 'Produto 2',
        marca: 'Marca 2',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '24/05/2023'
    },
    {
        nome: 'Produto 2',
        marca: 'Marca 2',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '25/05/2023'
    }
]

function Solicitacoes() {

    const [solicitacoes, setSolicitacoes] = useState(solicitacoesData);
    const [buscar, setBuscar] = useState();

    const registros = solicitacoes?.length;
    const [paginas, setPaginas] = useState(0);

    const solicitacoesPaginado = solicitacoes.slice(paginas * 5, paginas * 5 + 5);
    const totalPages = Math.ceil(solicitacoes.length / 5);

    return (
        <>
            <Container>
                <Content>
                    <div>
                        <h1>Solicitações</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="buscar" onChange={(e) => setBuscar(e.target.value)} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                    </div>

                    <div>
                        <div>
                            <p>Mais de {registros} novos orçamentos</p>
                        </div>
                    </div>

                </Content>
                {solicitacoesPaginado?.map((data, index) => (
                    <SolicitacoesRow
                        key={index}
                        solicitacoes={data}
                        paginas={paginas}
                    />
                ))}
                <Pagination
                    count={totalPages}
                    page={paginas + 1}
                    onChange={(event, value) => setPaginas(value - 1)}
                    shape="rounded"
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px'
                    }}
                />
            </Container>
        </>
    );
}

export default Solicitacoes;