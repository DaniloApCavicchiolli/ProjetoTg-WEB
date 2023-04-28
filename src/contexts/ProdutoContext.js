import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const ContextProduto = createContext({});

const ProviderProduto = ({ children }) => {

    /* Função para carregar produtos */
    const loadingProdutos = async () => {
        try {
            const { data } = await api.get(`/produto`);
            return data;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    /* Função para delatar produto */
    const deleteProduto = async (id) => {
        try {
            const resp = await api.delete(`/produto/${id}`);
            resp?.status === 200 ?
                toast.success("Deletado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível deletar o produto");
            return false;
        }
    };

    /* Função para atualizar produto */
    const updateProduto = async (data, id) => {
        try {
            const resp = await api.put(`/produto/${id}`, data);
            resp?.status === 200 ?
                toast.success("Editado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível editar o produto");
            return false;
        }
    };

    /* Função para criar produto */
    const createProduto = async (data) => {
        try {
            const resp = await api.post(`/produto`, data);
            resp?.status === 200 ?
                toast.success("Cadastrado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível registrar o produto");
            return false;
        }
    };

    return (
        <ContextProduto.Provider
            value={{
                deleteProduto,
                loadingProdutos,
                updateProduto,
                createProduto,
            }}
        >
            {children}
        </ContextProduto.Provider>
    );
};

export { ContextProduto, ProviderProduto };