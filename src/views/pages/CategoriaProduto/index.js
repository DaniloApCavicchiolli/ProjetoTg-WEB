import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { RiSearchLine } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import CategoriasRow from "../../../components/CategoriasRow";
import ProdutosRow from "../../../components/ProdutosRow";

import { Container, Content, Header, Buscar } from "./styles";

function CategoriaProduto() {

    const [botao, setBotao] = useState();

    const [categorias, setCategorias] = useState([]);
    const [categoriasBusca, setCategoriasBusca] = useState([]);

    const [pageCategorias, setPagesCategorias] = useState(0);
    const [totalPagesCategorias, setTotalPagesCategorias] = useState();
    const [pagesBuscaCategorias, setPagesBuscaCategorias] = useState(0);
    const [totalPagesBuscaCategoria, setTotalPagesBuscaCategorias] = useState();

    const [produtos, setProdutos] = useState([]);
    const [produtoBusca, setProdutoBusca] = useState([]);
    const [pageProdutos, setPageProdutos] = useState(0);
    const [totalPagesProdutos, setTotalPagesProdutos] = useState();
    const [pagesBuscaProduto, setPagesBuscaProdutos] = useState(0);
    const [totalPagesBuscaProduto, setTotalPagesBuscaProduto] = useState();

    /*==================== Funções para categorias ====================*/
    const loadingCategorias = async () => {
        try {
            const { data } = await api.get(`/categoria?page=${pageCategorias}`);
            setCategorias(data.content);
            setTotalPagesCategorias(data.totalPages);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadingCategorias();
    }, [pageCategorias]);

    const handleChangeCategorias = (event, value) => {
        let valorPage = value - 1
        categoriasBusca.length > 0
            ?
            setPagesBuscaCategorias(valorPage)
            :
            setPagesCategorias(valorPage)
    };

    const handleChangeProdutos = (event, value) => {
        let valorPage = value - 1
        produtoBusca.length > 0
            ?
            setPagesBuscaProdutos(valorPage)
            :
            setPageProdutos(valorPage)
    };

    return (
        <>
            <Container>
                <Header>
                    <div>
                        <h1>Categorias</h1>
                    </div>
                    <Buscar style={{ width: '40%' }}>
                        <input style={{ marginLeft: '10px' }} name="buscar" placeholder="buscar" onChange={() => { }} />
                        <div id='button' type="button" onClick={() => { }}>
                            <RiSearchLine size={20} />
                        </div>
                    </Buscar>
                    <div>
                        <button onClick={() => { }}>
                            +
                        </button>
                    </div>
                </Header>
                {categorias?.map((data, index) => (
                    <CategoriasRow
                        key={index}
                        categorias={data}
                        setBotao={setBotao}
                    />
                ))}
                <Pagination
                    count={categoriasBusca.length > 0 ? totalPagesBuscaCategoria : totalPagesCategorias}
                    page={categoriasBusca.length > 0 ? pagesBuscaCategorias + 1 : pageCategorias + 1}
                    onChange={handleChangeCategorias}
                    shape="rounded"
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '92px'
                    }}
                />
                <Content>
                    <div>
                        <Header>
                            <div>
                                <h1>Produtos</h1>
                            </div>
                            <Buscar style={{ width: '40%' }}>
                                <input
                                    name="buscar"
                                    placeholder="buscar"
                                    style={{ marginLeft: '10px' }}
                                    onChange={() => {}} />
                                <div
                                    id='button'
                                    type="button"
                                    onClick={() => {}}
                                >
                                    <RiSearchLine size={20} />
                                </div>
                            </Buscar>
                            <div>
                                <button onClick={() => { }}>
                                    +
                                </button>
                            </div>
                        </Header>
                        {produtos?.map((data, index) => (
                            <ProdutosRow
                                key={index}
                                produtos={data}
                                setBotao={setBotao}
                            />
                        ))}
                        <Pagination
                            count={produtoBusca.length > 0 ? totalPagesBuscaProduto : totalPagesProdutos}
                            page={produtoBusca.length > 0 ? pagesBuscaProduto + 1 : pageProdutos + 1}
                            onChange={handleChangeProdutos}
                            shape="rounded"
                            style={{
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '92px'
                            }}
                        />
                    </div>
                </Content>
            </Container>
        </>
    );
}

export default CategoriaProduto;