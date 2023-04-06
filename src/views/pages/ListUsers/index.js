import React, { useState, useEffect } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import api from "../../../services/api";
import UserRow from "../../../components/UserRow";
import Pagination from "@mui/material/Pagination";

import { Container, Content, Buscar } from "./styles";

function ListagemUser() {

    const [users, setUsers] = useState([]);
    const [usersBusca, setUsersBusca] = useState([]);

    const [buscar, setBuscar] = useState('');

    const [page, setPage] = useState(0);

    const [pages, setPages] = useState(0);
    const [pagesBusca, setPagesBusca] = useState(0);
    const [totalPagesBusca, setTotalPagesBusca] = useState();

    const [registros, setRegistros] = useState();

    const loadingUsers = async () => {
        try {
            const { data } = await api.get(`/users`);
            setUsers(data);
            setRegistros(data.length);
        } catch (err) {
            console.log(err);
        }
    }; 

    useEffect(() => {
        loadingUsers();
    }, [pages]);

    const handleChange = (event, value) => {
        const valorPage = value - 1;
        usersBusca.length > 0
            ?
            setPagesBusca(valorPage)
            :
            setPage(valorPage)
    };

    const usersPaginado = users.slice(page * 5, page * 5 + 5);
    const pagesTotal = Math.ceil(users.length / 5);

    return (
        <>
            <Container>
                <Content>
                    <div style={{ marginBottom: '15px' }}>
                        <h1>Usuários</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="buscar" onChange={(e) => setBuscar(e.target.value)} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <button
                            onClick={() => { }}>
                            +
                        </button>
                    </div>
                    <div>
                        <h2 id='p'>Mais de {registros} novos usuários</h2>
                    </div>
                </Content>
                {usersPaginado?.map((user, index) => (
                    <UserRow
                        key={index}
                        users={user}
                    />
                ))}
                <Pagination
                    count={usersBusca.length > 0 ? totalPagesBusca : pagesTotal}
                    page={usersBusca.length > 0 ? pagesBusca + 1 : page + 1}
                    onChange={handleChange}
                    shape="rounded"
                    style={{
                        display: "flex",
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginBottom: '12px'
                    }}
                />
            </Container>
        </>
    );
}

export default ListagemUser;