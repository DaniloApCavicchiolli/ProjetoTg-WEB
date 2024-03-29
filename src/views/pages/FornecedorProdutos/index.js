import React, { useState, useEffect, useContext } from "react";
import { RiSearchLine } from "react-icons/ri";

import FornecedorProdutosRows from "../../../components/FornecedorProdutos";
import { ContextFornecedorProduto } from "../../../contexts/FornecedorProdutosContext";
import ProdutosRow from "../../../components/FornecedorProdutos/ProdutosRow";
import Pagination from '@mui/material/Pagination';
import ModalDelete from "./ModalDelete";

import { Container, Content, ContainerButtons, Buscar } from "./styles";
import colors from "../../../styles/colors";

function FornecedorProdutos() {
    const { loadFornecedorProdutos, loadFornecedorProdutosNotSelected, createFornecedorProduto } = useContext(ContextFornecedorProduto);

    const [botao, setBotao] = useState(1);
    const [buscar, setBuscar] = useState();

    const [fornecedorProdutos, setFornecedorProdutos] = useState([]);
    const [fornecedorProdutosPage, setFornecedorProdutosPage] = useState(0);

    const [produtos, setProdutos] = useState([]);
    const [totalPagesProdutos, setTotalPageProdutos] = useState();
    const [registrosProdutos, setRegistrosProdutos] = useState();
    const [pageProdutos, setPageProdutos] = useState(0);

    const [selected, setSelected] = useState([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [produtoSelected, setProdutoSelected] = useState(null);

    const produtosOfFornecedor = [...fornecedorProdutos]
        .slice(fornecedorProdutosPage * 5, fornecedorProdutosPage * 5 + 5);
    const toalPages = Math.ceil([...fornecedorProdutos].length / 5);

    const handleSubmitProduto = async () => {
        try {
            if (selected.length > 0) {
                await createFornecedorProduto(selected)
            }
            await loadFornecedorProdutos(setFornecedorProdutos);
            setBotao(1);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadFornecedorProdutos(setFornecedorProdutos);
        loadFornecedorProdutosNotSelected(setProdutos, setTotalPageProdutos, setRegistrosProdutos);
    }, [pageProdutos]);

    return (
        <>
            {showModalDelete && (
                <ModalDelete
                    setShowModalDelete={setShowModalDelete}
                    produto={produtoSelected}
                    setFornecedorProdutos={setFornecedorProdutos}
                />
            )}
            <Container>
                <ContainerButtons>
                    <div>
                        <div id="p" type="button"
                            onClick={() => {
                                setBotao(1);
                                loadFornecedorProdutos(setFornecedorProdutos);
                            }}
                            style={{
                                backgroundColor: botao === 1 ? `${colors.primary}` : `${colors.lightGray}`,
                                color: botao === 1 ? `${colors.white}` : `${colors.darkGrayishBlue}`
                            }}>
                            Produtos que Trabalha
                        </div>
                        {" || "}
                        <div id="p" type="button"
                            onClick={() => {
                                setBotao(2);
                                loadFornecedorProdutosNotSelected(setProdutos, setTotalPageProdutos, setRegistrosProdutos)
                            }}
                            style={{
                                backgroundColor: botao === 2 ? `${colors.primary}` : `${colors.lightGray}`,
                                color: botao === 2 ? `${colors.white}` : `${colors.darkGrayishBlue}`
                            }}>
                            Produtos
                        </div>
                    </div>
                </ContainerButtons>
                <Content>
                    <div>
                        <div>
                            {botao === 1 && <h1>Produtos que trabalha</h1>}
                            {botao === 2 && <h1>Lista de Produtos</h1>}
                        </div>
                        <Buscar>
                            <input style={{ marginLeft: '10px' }} name="buscar" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)} />
                            <div id='button' type="button" onClick={() => { }}>
                                <RiSearchLine size={20} />
                            </div>
                        </Buscar>
                        <div>
                            <button
                                style={{
                                    boxShadow: botao === 1 && 'none',
                                    backgroundColor: botao === 1 && 'transparent',
                                    cursor: botao !== 1 && "pointer"
                                }}
                                onClick={botao === 2 && handleSubmitProduto}
                                disabled={botao === 1 && true}
                            >
                                {botao === 2 && 'Adicionar Produtos'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {botao === 1 && <p>Total de {produtosOfFornecedor.length} produtos </p>}
                            {botao === 2 && <p>Total de {registrosProdutos} produtos </p>}
                        </div>
                    </div>
                </Content>
                {botao === 1 &&
                    produtosOfFornecedor?.map((data, index) => (
                        <FornecedorProdutosRows
                            key={index}
                            produto={data}
                            setShowModalDelete={setShowModalDelete}
                            setProdutoSelected={setProdutoSelected}
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
                            setSelected={setSelected}
                            selected={selected}
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