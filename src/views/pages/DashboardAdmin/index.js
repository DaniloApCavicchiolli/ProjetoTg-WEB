import React, { useState, useRef } from "react";
import {
    RiFilterLine,
} from "react-icons/ri";
import Select from "react-select";

import NumeroUsuarios from "./Usuarios";
import NumeroFornecedores from "./Fornecedores";
import NumeroSolicitacoes from "./Solicitacoes";
import NumeroCotacoes from "./Cotacoes";

import { Container, Header, Content, Filtros } from "./styles";

function GraficosAdm() {
    const [mes, setMes] = useState([
        { value: 'Janeiro', label: 'Janeiro' },
        { value: 'Fevereiro', label: 'Fevereiro' },
        { value: 'Março', label: 'Março' }
    ]);
    const [filtroMesSelecionado, setFiltroMesSelecionado] = useState('');
    const [ano, setAno] = useState([
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' }
    ]);
    const [filtroAnoSelecionado, setFiltroAnoSelecionado] = useState('');

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
                <Header>
                    <div>
                        <h1>Gráficos</h1>
                    </div>
                </Header>
                <Content>
                    <div id='soma'>
                        <h1>Clientes</h1>
                        <Filtros>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroMesSelecionado(value.label)}
                                    options={mes}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por mês</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroAnoSelecionado(value.label)}
                                    options={ano}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por ano</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                        </Filtros>
                    </div>
                    <div>
                        <NumeroUsuarios />
                    </div>
                    <div id='soma'>
                        <h1>Fornecedores</h1>
                        <Filtros>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroMesSelecionado(value.label)}
                                    options={mes}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por mês</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroAnoSelecionado(value.label)}
                                    options={ano}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por ano</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                        </Filtros>
                    </div>
                    <div>
                        <NumeroFornecedores />
                    </div>
                    <div id='soma'>
                        <h1>Solicitações</h1>
                        <Filtros>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroMesSelecionado(value.label)}
                                    options={mes}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por mês</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroAnoSelecionado(value.label)}
                                    options={ano}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por ano</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                        </Filtros>
                    </div>
                    <div>
                        <NumeroSolicitacoes />
                    </div>
                    <div id='soma'>
                        <h1>Cotações</h1>
                        <Filtros>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroMesSelecionado(value.label)}
                                    options={mes}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por mês</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                            <section id="select" style={{ boxShadow: '0px 5px 6px rgba(0,0,0,0.6)', cursor: 'pointer' }}>
                                <Select
                                    isMulti={false}
                                    onChange={value => setFiltroAnoSelecionado(value.label)}
                                    options={ano}
                                    placeholder={
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <RiFilterLine style={{ display: 'flex' }} size={25} />
                                            <p style={{ fontSize: '16px' }}>Filtrar por ano</p>
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
                                            primary25: 'rgb(12, 157, 164, 0.4)',
                                            primary: '#20655F',
                                        },
                                    })}
                                />
                            </section>
                        </Filtros>
                    </div>
                    <div>
                        <NumeroCotacoes />
                    </div>
                </Content>
            </Container>
        </>
    )
}

export default GraficosAdm;
