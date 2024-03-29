import React, { useState, useEffect, useContext } from "react";
import { RiSearchLine, RiFilterLine } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import { getNivel } from "../../../services/auth";
import Select from "react-select";

import SolicitacoesRow from "../../../components/SolicitacoesRow";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

import { ContextSolicitacao } from "../../../contexts/SolicitacoesContext";

import colors from "../../../styles/colors";
import { Container, Content, Filtros, Buscar } from "./styles";

function Solicitacoes() {
    const nivel = getNivel();
    const { LoadAllSolicitacoes, LoadAllSolicitacoesFornecedor } = useContext(ContextSolicitacao);
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [buscar, setBuscar] = useState();

    const [produtos, setProdutos] = useState([
        { value: 'Produto 1', label: 'Produto 1' },
        { value: 'Produto 2', label: 'Produto 2' },
        { value: 'Produto 3', label: 'Produto 3' },
    ]);
    const [selectedProduto, setSelectedProduto] = useState('');
    const [marcas, setMarcas] = useState([
        { value: 'Marca 1', label: 'Marca 1' },
        { value: 'Marca 2', label: 'Marca 2' },
        { value: 'Marca 3', label: 'Marca 3' },
    ]);
    const [selectedMarca, setSelectedMarca] = useState('');

    const [itemSelected, setItemSelected] = useState(null);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const registros = solicitacoes?.length;
    const [paginas, setPaginas] = useState(0);

    const solicitacoesPaginado = solicitacoes?.slice(paginas * 5, paginas * 5 + 5);
    const totalPages = Math.ceil(solicitacoes.length / 5);

    const handleUser = () => {
        if (nivel === '999') {
            LoadAllSolicitacoes().then((result) => {
                setSolicitacoes(result.content);
            });
        } else {
            LoadAllSolicitacoesFornecedor().then((result) => {
                setSolicitacoes(result.content);
            });
        }
    }

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

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <>
            {showModalDelete && (
                <ModalDelete
                    setShowModalDelete={setShowModalDelete}
                    item={itemSelected}
                    loadSolicitacoes={handleUser}
                />
            )}
            {showModalEdit && (
                <ModalEdit
                    setShowModalEdit={setShowModalEdit}
                    item={itemSelected}
                    loadSolicitacoes={handleUser}
                />
            )}
            <Container>
                <Content>
                    <div>
                        <h1>Solicitações</h1>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <div></div>
                    </div>

                    <div>
                        <div>
                            <p>Total de {registros} solicitações</p>
                        </div>
                    </div>
                </Content>
                <Filtros>
                    <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', }}>
                        <Select
                            isMulti={false}
                            onChange={value => setSelectedProduto(value.label)}
                            options={produtos}
                            placeholder={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <RiFilterLine style={{ display: 'flex' }} size={25} />
                                    <p style={{ fontSize: '16px' }}>Filtro Produto</p>
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
                            onChange={value => setSelectedMarca(value.label)}
                            options={marcas}
                            placeholder={
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <RiFilterLine style={{ display: 'flex' }} size={25} />
                                    <p style={{ fontSize: '16px' }}>Filtro Marca</p>
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
                {solicitacoesPaginado?.map((data, index) => (
                    <SolicitacoesRow
                        key={index}
                        solicitacoes={data}
                        paginas={paginas}
                        setItemSelected={setItemSelected}
                        setShowModalDelete={setShowModalDelete}
                        setShowModalEdit={setShowModalEdit}
                        loadSolicitacoes={handleUser}
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