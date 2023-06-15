import React, { createContext } from "react";
import { getNivel, getId } from "../services/auth";
import { toast } from "react-toastify";
import api from "../services/api";

const ContextCotacao = createContext({});

const ProviderCotacao = ({ children }) => {

    /* Função para carregar todas as cotações */
    const LoadAllCotacoes = async () => {
        try {
            const response = await api.get(`/cotacoes`);
            if (response.status === 200) {
                return response.data;
            }
            return;
        } catch (err) {
            console.log(err);
            toast.error("Não foi possível mostrar as cotações");
            return false;
        }
    };

    /* Função para carregar todas as cotações do fornecedor */
    const LoadAllCotacoesFornecedor = async () => {
        try {
            const id = getId();
            const response = await api.get(`/cotacoes_fornecedor/${id}`);

            if (response.status === 200) {
                return response.data;
            }
            return;
        } catch (err) {
            console.log(err);
            toast.error("Não foi possível mostrar as cotações");
            return false;
        }
    };


    /* Função para realizar cotação */
    const createCotação = async (solicitacao_id, valor) => {
        try {
            const id = getId();
            const resp = await api.post(`/fornecedor/${id}/solicitacao/${solicitacao_id}`, { valor: valor });
            if (resp.status === 200) {
                toast.success(resp.data.message);
                return resp.data;
            }
            toast.error(resp.data.message);
            return;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível realizar a cotação");
            return false;
        }
    };

    return (
        <ContextCotacao.Provider
            value={{
                LoadAllCotacoes,
                LoadAllCotacoesFornecedor,
                createCotação,
            }}
        >
            {children}
        </ContextCotacao.Provider>
    );
};

export { ContextCotacao, ProviderCotacao };