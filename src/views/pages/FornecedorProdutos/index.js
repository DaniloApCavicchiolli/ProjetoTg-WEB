import React, { useState, useEffect, useContext } from "react";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";

import FornecedorProdutosRows from "../../../components/FornecedorProdutos";
import { ContextFornecedorProduto } from "../../../contexts/FornecedorProdutosContext";
import Pagination from '@mui/material/Pagination';

import { Container, Content, Tabela, Buscar } from "./styles";

function FornecedorProdutos() {
    const { loadFornecedorProdutos } = useContext(ContextFornecedorProduto);

    const [botao, setBotao] = useState(1);
    const [buscar, setBuscar] = useState();

    const [fornecedorProdutos, setFornecedorProdutos] = useState([]);
    const [fornecedorProdutosPage, setFornecedorProdutosPage] = useState(0);

    useEffect(() => {
        loadFornecedorProdutos(setFornecedorProdutos);
    }, []);


    const produtosOfFornecedor = [...fornecedorProdutos]
        .slice(fornecedorProdutosPage * 5, fornecedorProdutosPage * 5 + 5);
    const toalPages = Math.ceil([...fornecedorProdutos].length / 5);

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
                                backgroundColor: botao === 1 ? "#20655F" : "#EFF1F9",
                                color: botao === 1 ? "#FFF" : "#626679"
                            }}>
                            Produtos que Trabalha
                        </div>
                        {" | "}
                        <div id="p" type="button" onClick={() => { setBotao(2) }}
                            style={{
                                backgroundColor: botao === 2 ? "#20655F" : "#EFF1F9",
                                color: botao === 2 ? "#FFF" : "#626679"
                            }}>
                            Produtos
                        </div>
                    </div>
                </Tabela>
                <Content>
                    <div>
                        <div>
                            {botao === 1 && <h1>Produtos que trabalha</h1>}
                        </div>
                    </div>
                    <div>
                        <div>
                            {botao === 1 && <p>Mais de {produtosOfFornecedor.length} novos produtos </p>}
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
            </Container>
        </>
    );
}

export default FornecedorProdutos;