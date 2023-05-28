import React, { useState, useEffect } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import api from "../../../services/api";
import UserRow from "../../../components/UserRow";
import Pagination from "@mui/material/Pagination";
import Select from "react-select";
import colors from "../../../styles/colors";

import ModalCreate from "./ModalCreate";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

import { Container, Content, Buscar, Filtros } from "./styles";

function ListagemUser() {

    const [users, setUsers] = useState([]);
    const [usersBusca, setUsersBusca] = useState([]);
    const [buscar, setBuscar] = useState('');

    const [cidades, setCidades] = useState([
        { value: 'UserTeste', label: 'UserTeste' },
        { value: 'Danilo', label: 'Danilo' },
        { value: 'Carlos', label: 'Carlos' },
    ]);
    const [selectedCidade, setSelectedCidade] = useState('');
    const [status, setStatus] = useState([
        { value: 'Ativo', label: 'Ativo' },
        { value: 'Inativo', label: 'Inativo' },
    ]);
    const [selectedStatus, setSelectedStatus] = useState('');

    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [pagesBusca, setPagesBusca] = useState(0);
    const [totalPagesBusca, setTotalPagesBusca] = useState();

    const [registros, setRegistros] = useState();

    const [userSelected, setUserSelected] = useState(null);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

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

    const customStyles = {
        control: () => ({
            width: 150,
            borderRadius: '8px',
            height: '35px',
            // backgroundColor: 'yellow'
        }),
        menuList: (provided) => ({
            ...provided,
            width: 150,
            display: 'flex',
            flexDirection: 'column',
            fontSize: 15,
        }),
        valueContainer: (provider) => ({
            ...provider,
            width: '100%',
            height: '100%'
        })
    };

    return (
        <>
            {showModalCreate && (
                <ModalCreate
                    setShowModalCreate={setShowModalCreate}
                    loading={loadingUsers}
                />
            )}
            {showModalEdit && (
                <ModalEdit
                    setShowModalEdit={setShowModalEdit}
                    user={userSelected}
                    loading={loadingUsers}
                />
            )}
            {showModalDelete && (
                <ModalDelete
                    setShowModalDelete={setShowModalDelete}
                    user={userSelected}
                    loading={loadingUsers}
                />
            )}
            <Container>
                <Content>
                    <div>
                        <h1>Usuários</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <button
                            onClick={() => setShowModalCreate(true)}>
                            +
                        </button>
                    </div>
                    <div>
                        <h2 id='p'>Total de {registros} usuários</h2>
                    </div>
                </Content>
                <Filtros>
                    <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', }}>
                        <Select
                            isMulti={false}
                            onChange={value => setSelectedCidade(value.label)}
                            options={cidades}
                            placeholder={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <RiFilterLine style={{ display: 'flex' }} size={25} />
                                    <p style={{ fontSize: '16px' }}>Filtro Cidade</p>
                                </div>
                            }
                            maxMenuHeight={160}
                            menuPlacement='auto'
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: colors.secondaryRGB,
                                    primary: colors.secondary,
                                },
                            })}
                        />
                    </section>
                    <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', marginRight: '25px' }}>
                        <Select
                            isMulti={false}
                            onChange={value => setSelectedStatus(value.label)}
                            options={status}
                            placeholder={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <RiFilterLine style={{ display: 'flex' }} size={25} />
                                    <p style={{ fontSize: '16px' }}>Filtro Status</p>
                                </div>
                            }
                            maxMenuHeight={160}
                            menuPlacement='auto'
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: colors.secondaryRGB,
                                    primary: colors.secondary,
                                },
                            })}
                        />
                    </section>
                </Filtros>
                {usersPaginado?.map((user, index) => (
                    <UserRow
                        key={index}
                        users={user}
                        setUserSelected={setUserSelected}
                        setShowModalEdit={setShowModalEdit}
                        setShowModalDelete={setShowModalDelete}
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