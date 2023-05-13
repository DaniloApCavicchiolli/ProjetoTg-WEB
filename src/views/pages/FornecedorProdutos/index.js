import React, { useState, useEffect, useContext } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";

import FornecedorProdutosRows from "../../../components/FornecedorProdutos";
import { ContextFornecedorProduto } from "../../../contexts/FornecedorProdutosContext";
import ProdutosRow from "../../../components/FornecedorProdutos/ProdutosRow";
import Pagination from '@mui/material/Pagination';

import { Container, Content, Tabela, Buscar } from "./styles";
import colors from "../../../styles/colors";

function FornecedorProdutos() {
    const { loadFornecedorProdutos, loadFornecedorProdutosNotSelected } = useContext(ContextFornecedorProduto);

    const [botao, setBotao] = useState(1);
    const [buscar, setBuscar] = useState();

    const [fornecedorProdutos, setFornecedorProdutos] = useState([]);
    const [fornecedorProdutosPage, setFornecedorProdutosPage] = useState(0);

    const [produtos, setProdutos] = useState([]);
    const [totalPagesProdutos, setTotalPageProdutos] = useState();
    const [registrosProdutos, setRegistrosProdutos] = useState();
    const [pageProdutos, setPageProdutos] = useState(0);

    useEffect(() => {
        loadFornecedorProdutos(setFornecedorProdutos);
        loadFornecedorProdutosNotSelected(setProdutos, setTotalPageProdutos, setRegistrosProdutos);
    }, []);


    const produtosOfFornecedor = [...fornecedorProdutos]
        .slice(fornecedorProdutosPage * 5, fornecedorProdutosPage * 5 + 5);
    const toalPages = Math.ceil([...fornecedorProdutos].length / 5);

    // const handleChangeProdutos = (event, value) => {
    //     let valorPage = value - 1
    //     setPageProdutos(valorPage);
    // };

    return (
        <>
            <Container>
                <Tabela>
                    <Buscar>
                        <input name="buscar" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)} />
                        <div id='button' type="button" onClick={() => { }}>
                            <RiSearchLine size={20} />
                        </div>
                    </Buscar>
                    <div>
                        <div id="p" type="button" onClick={() => setBotao(1)}
                            style={{
                                backgroundColor: botao === 1 ? `${colors.primary}` : `${colors.lightGray}`,
                                color: botao === 1 ? `${colors.white}` : `${colors.darkGrayishBlue}`
                            }}>
                            Produtos que Trabalha
                        </div>
                        {" | "}
                        <div id="p" type="button" onClick={() => { setBotao(2) }}
                            style={{
                                backgroundColor: botao === 2 ? `${colors.primary}` : `${colors.lightGray}`,
                                color: botao === 2 ? `${colors.white}` : `${colors.darkGrayishBlue}`
                            }}>
                            Produtos
                        </div>
                    </div>
                </Tabela>
                <Content>
                    <div>
                        <div>
                            {botao === 1 && <h1>Produtos que trabalha</h1>}
                            {botao === 2 && <h1>Lista de Produtos</h1>}
                        </div>
                    </div>
                    <div>
                        <div>
                            {botao === 1 && <p>Mais de {produtosOfFornecedor.length} novos produtos </p>}
                            {botao === 2 && <p>Mais de {registrosProdutos} novos produtos </p>}
                        </div>
                    </div>
                </Content>
                {botao === 1 &&
                    produtosOfFornecedor?.map((data, index) => (
                        <FornecedorProdutosRows
                            key={index}
                            produto={data}
                        />
                    ))}
                {botao === 1 &&
                    <Pagination
                        count={toalPages}
                        page={fornecedorProdutosPage + 1}
                        onChange={(event, value) => setFornecedorProdutosPage(value - 1)}
                        shape="rounded"
                        style={{
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginLeft: '92px',
                            marginBottom: '15px'
                        }} />}
                {botao === 2 &&
                    produtos?.map((data) => (
                        <ProdutosRow
                            key={data.id}
                            produtos={data}
                        />
                    ))}
                {botao === 2 &&
                    <Pagination
                        count={totalPagesProdutos}
                        page={pageProdutos + 1}
                        onChange={(event, value) => setPageProdutos(value - 1)}
                        shape="rounded"
                        style={{
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginLeft: '92px'
                            marginBottom: '15px'
                        }} />}
            </Container>
        </>
    );
}

export default FornecedorProdutos;