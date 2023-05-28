import React, { useState, useEffect } from "react";
import {
    RiSearchLine
} from "react-icons/ri";
import Pagination from '@mui/material/Pagination';

import SolicitacoesRow from "../../../components/SolicitacoesRow";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

import { Container, Content, Filtro, Buscar } from "./styles";

const solicitacoesData = [
    {
        id: 1,
        nome: 'Produto 1',
        marca: 'Marca 1',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '20/05/2023'
    },
    {
        id: 2,
        nome: 'Produto 2',
        marca: 'Marca 2',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '22/05/2023'
    },
    {
        id: 3,
        nome: 'Produto 3',
        marca: 'Marca 3',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '23/05/2023'
    },
    {
        id: 4,
        nome: 'Produto 4',
        marca: 'Marca 4',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '24/05/2023',
        value: 40.00
    },
    {
        id: 5,
        nome: 'Produto 5',
        marca: 'Marca 5',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '25/05/2023',
        value: 100.00
    },
    {
        id: 6,
        nome: 'Produto 6',
        marca: 'Marca 6',
        quantidade: 5,
        forma_pagamento: 'Cartão',
        date: '25/05/2023',
        value: 130.00
    }
]

function Solicitacoes() {

    const [solicitacoes, setSolicitacoes] = useState(solicitacoesData);
    const [buscar, setBuscar] = useState();

    const [itemSelected, setItemSelected] = useState(null);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const registros = solicitacoes?.length;
    const [paginas, setPaginas] = useState(0);
    const solicitacoesPaginado = solicitacoes.slice(paginas * 5, paginas * 5 + 5);
    const totalPages = Math.ceil(solicitacoes.length / 5);

    return (
        <>
            {showModalDelete && (
                <ModalDelete
                    setShowModalDelete={setShowModalDelete}
                />
            )}
            {showModalEdit && (
                <ModalEdit
                    setShowModalEdit={setShowModalEdit}
                    item={itemSelected}
                />
            )}
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
                            <p>Total de {registros} solicitações</p>
                        </div>
                    </div>
                </Content>
                {solicitacoesPaginado?.map((data, index) => (
                    <SolicitacoesRow
                        key={index}
                        solicitacoes={data}
                        paginas={paginas}
                        setItemSelected={setItemSelected}
                        setShowModalDelete={setShowModalDelete}
                        setShowModalEdit={setShowModalEdit}
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