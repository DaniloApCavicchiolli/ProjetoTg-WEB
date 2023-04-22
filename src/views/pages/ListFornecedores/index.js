import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import api from "../../../services/api";
import FornecedoresRow from "../../../components/FornecedoresRow";
import Pagination from '@mui/material/Pagination';
import ModalCreate from "./ModalCreate";

import { Container, Content, Buscar } from "./styles";

function ListagemFornecedor() {

    const [fornecedores, setFornecedores] = useState([]);
    const [fornecedoresBusca, setFornecedoresBusca] = useState([]);

    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages] = useState();
    const [pagesBusca, setPagesBusca] = useState(0);
    const [totalPagesBusca, setTotalPagesBusca] = useState();
    const [registros, setRegistros] = useState();

    const [showModalCreate, setShowModalCreate] = useState(false);

    const loadingUsers = async () => {
        try {
            const { data } = await api.get(`/fornecedor?page=${pages}`);
            setFornecedores(data.content);
            setTotalPages(data.totalPages);
            setRegistros(data.registros);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadingUsers();
    }, [pages]);


    const handleChange = (event, value) => {
        const valorPage = value - 1;
        fornecedoresBusca.length > 0
            ?
            setPagesBusca(valorPage)
            :
            setPages(valorPage)
    };

    return (
        <>
            {showModalCreate && (
                <ModalCreate
                    setShowModalCreate={setShowModalCreate}
                    loading={loadingUsers}
                />
            )}
            <Container>
                <Content>
                    <div>
                        <h1>Fornecedores</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="buscar..." onChange={() => { }} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <button onClick={() => { setShowModalCreate(true) }}>
                            +
                        </button>
                    </div>
                    <div>
                        <h2>Mais de {registros} novos fornecedores</h2>
                    </div>
                </Content>
                {fornecedores?.map((data, index) => (
                    <FornecedoresRow
                        key={index}
                        fornecedor={data}
                    />
                ))}
                <Pagination
                    count={fornecedoresBusca.length > 0 ? totalPagesBusca : totalPages}
                    page={fornecedoresBusca.length > 0 ? pagesBusca + 1 : pages + 1}
                    onChange={handleChange}
                    shape="rounded"
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
            </Container>
        </>
    );
}

export default ListagemFornecedor;