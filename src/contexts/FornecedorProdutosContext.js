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

    return (
        <ContextFornecedorProduto.Provider
            value={{
                loadFornecedorProdutos,
            }}
        >
            {children}
        </ContextFornecedorProduto.Provider>
    );
};

export { ContextFornecedorProduto, ProviderFornecedorProduto };