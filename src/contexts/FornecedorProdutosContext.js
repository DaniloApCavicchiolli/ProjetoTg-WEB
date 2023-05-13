import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId } from "../services/auth";

const ContextFornecedorProduto = createContext({});

const ProviderFornecedorProduto = ({ children }) => {

    /* Função para mostrar produtos de um fornecedor */
    const loadFornecedorProdutos = async (setFornecedorProdutos) => {
        try {
            const id = getId();
            const { data } = await api.get(`/fornecedor_produtos/${id}`);
            setFornecedorProdutos(data);
        } catch (err) {
            console.log(err);
        }
    };

    /* Mostrar todos os Produtos não selecionados pelo Fornecedor */
    const loadFornecedorProdutosNotSelected = async (setProdutos, setTotalPageProdutos, setRegistrosProdutos) => {
        try {
            const id = getId();
            const { data } = await api.get(`/fornecedor_produtos_notSelected/${id}`);
            setProdutos(data.content);
            setTotalPageProdutos(data.totalPages);
            setRegistrosProdutos(data.registros);
        } catch (err) {
            console.log(err);
        }
    };

    /* Função para registrar produtos para um fornecedor */
    const createFornecedorProduto = async (selected) => {
        try {
            const id = getId();
            const response = await api.post(`/fornecedor_produtos/${id}`, { produto_id: selected });
            if (response?.status === 200) {
                toast.success("Cadastrado com sucesso!")
                return response.data;
            }
            toast.error(response?.data?.message)
            return false;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || 'Não foi possível registrar o Produto');
            return false;
        }
    };

    return (
        <ContextFornecedorProduto.Provider
            value={{
                loadFornecedorProdutos,
                loadFornecedorProdutosNotSelected,
                createFornecedorProduto
            }}
        >
            {children}
        </ContextFornecedorProduto.Provider>
    );
};

export { ContextFornecedorProduto, ProviderFornecedorProduto };