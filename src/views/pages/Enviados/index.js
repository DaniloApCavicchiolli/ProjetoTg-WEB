import React, { useState } from "react";
import { RiSearchLine, RiFilterLine } from "react-icons/ri";
import { BiFontSize } from "react-icons/bi";
import Pagination from '@mui/material/Pagination';
import Select from "react-select";

import EnviadosRow from "../../../components/EnviadosRow";
import { getNivel } from "../../../services/auth";
import colors from "../../../styles/colors";

import { Container, Header, Content, Body, Buscar, Head, Filtros } from "./styles";

const enviadosData = [
    {
        nome: 'Produto 1',
        marca: 'Marca 1',
        fornecedor: 'Fornecedor 1',
        fornecedorEndereco: 'Endereço Fornecedor',
        valor: 20.00,
        date: '20/05/2023'
    },
    {
        nome: 'Produto 2',
        marca: 'Marca 2',
        fornecedor: 'Fornecedor 2',
        fornecedorEndereco: 'Endereço Fornecedor 2',
        valor: 22.00,
        date: '22/05/2023'
    },
    {
        nome: 'Produto 3',
        marca: 'Marca 3',
        fornecedor: 'Fornecedor 3',
        fornecedorEndereco: 'Endereço Fornecedor 3',
        valor: 23.00,
        date: '23/05/2023'
    },
    {
        nome: 'Produto 4',
        marca: 'Marca 4',
        fornecedor: 'Fornecedor 4',
        fornecedorEndereco: 'Endereço Fornecedor 4',
        valor: 24.00,
        date: '24/05/2023'
    },
    {
        nome: 'Produto 5',
        marca: 'Marca 5',
        fornecedor: 'Fornecedor 5',
        fornecedorEndereco: 'Endereço Fornecedor 5',
        valor: 25.00,
        date: '25/05/2023'
    }
]

function Enviados() {
    const nivel = getNivel();
    const [cor, setCor] = useState(0);
    const [enviados, setEnviados] = useState(enviadosData);
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

    const [page, setPage] = useState(0);

    const registros = enviadosData?.length;
    const enviadosPaginado = enviados?.slice(page * 5, page * 5 + 5);
    const totalPages = Math.ceil(enviados.length / 5);

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
            <Container>
                <Head>
                    <div>
                        <h1>Cotações</h1>
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
                            <p>Total de {registros} cotações</p>
                        </div>
                    </div>
                </Head>
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
                <Content>
                    {/* <Body>
                    </Body> */}
                    <Body>
                        <p type="button" onClick={() => setCor(1)} style={{ color: cor === 1 && "#F8AA27" }} >
                            <BiFontSize size={25} />Produto</p>
                    </Body>
                    <Body>
                        <p type="button" onClick={() => setCor(2)} style={{ color: cor === 2 && "#F8AA27" }} >
                            <BiFontSize size={25} />Marca</p>
                    </Body>
                    {nivel === '999' && <Body>
                        <p type="button" onClick={() => setCor(3)} style={{ color: cor === 3 && "#F8AA27" }} >
                            <BiFontSize size={25} />Fornecedor</p>
                    </Body>}
                    <Body>
                        <p type="button" onClick={() => setCor(5)} style={{ color: cor === 5 && "#F8AA27" }}>
                            <BiFontSize size={25} />Preço</p>
                    </Body>
                    <Body>
                        <p type="button" onClick={() => setCor(6)} style={{ color: cor === 6 && "#F8AA27" }}>
                            <BiFontSize size={25} />Data</p>
                    </Body>
                    {/* <Body>
                    </Body> */}
                </Content>
                {enviadosPaginado?.map((data, index) => (
                    <EnviadosRow
                        key={index}
                        enviados={data}
                    />
                ))}
                <Pagination
                    count={totalPages}
                    page={page + 1}
                    onChange={(event, value) => setPage(value - 1)}
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

export default Enviados;