import React, { useState, useEffect } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import api from "../../../services/api";
import FornecedoresRow from "../../../components/FornecedoresRow";
import Pagination from '@mui/material/Pagination';
import Select from "react-select";

import colors from "../../../styles/colors";
import ModalCreate from "./ModalCreate";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

import { Container, Content, Buscar, Filtros } from "./styles";

function ListagemFornecedor() {

    const [fornecedores, setFornecedores] = useState([]);
    const [fornecedoresBusca, setFornecedoresBusca] = useState([]);

    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages] = useState();
    const [pagesBusca, setPagesBusca] = useState(0);
    const [totalPagesBusca, setTotalPagesBusca] = useState();
    const [registros, setRegistros] = useState();

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

    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [userSelected, setUserSelected] = useState(null);

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
                        <h1>Fornecedores</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="Buscar" onChange={() => { }} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <button onClick={() => { setShowModalCreate(true) }}>
                            +
                        </button>
                    </div>
                    <div>
                        <h2>Total de {registros} fornecedores</h2>
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
                {fornecedores?.map((data, index) => (
                    <FornecedoresRow
                        key={index}
                        fornecedor={data}
                        setUserSelected={setUserSelected}
                        setShowModalEdit={setShowModalEdit}
                        setShowModalDelete={setShowModalDelete}
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