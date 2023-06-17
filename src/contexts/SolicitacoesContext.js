import React, { createContext } from "react";
import { getNivel, getId } from "../services/auth";
import { toast } from "react-toastify";
import api from "../services/api";

const ContextSolicitacao = createContext({});

const ProviderSolicitacao = ({ children }) => {

    /* Função para carregar todas as solicitações */
    const LoadAllSolicitacoes = async () => {
        try {
            const response = await api.get(`/solicitacao`);
            if (response.status === 200) {
                return response.data;
            }
            return;
        } catch (err) {
            console.log(err);
            toast.error("Não foi possível mostrar as solicitções");
            return false;
        }
    };

    /* Função para carregar todas as solicitações para o fornecedor */
    const LoadAllSolicitacoesFornecedor = async () => {
        try {
            const id = getId();
            const response = await api.get(`/solicitacao_fornecedor/${id}`);

            if (response.status === 200) {
                return response.data;
            }
            return;
        } catch (err) {
            console.log(err);
            toast.error("Não foi possível mostrar as solicitções");
            return false;
        }
    };

    /* Função para delatar relação de fornecedor com solicitação (cotação) */
    const deleteSolicitacao = async (id) => {
        try {
            const response = await api.delete(`/cotacao/${id}`);
            if (response.status === 200) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
                return;
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível excluir a solicitação");
            return false;
        }
    };

    /* Função para atualizar cotação */
    const updateSolicitacao = async (data, cotacaoId) => {
        try {
            const resp = await api.put(`/cotacao/${cotacaoId}`, data);
            if (resp?.status === 200) {
                toast.success(resp.data.message);
            } else {
                toast.error(resp.data.message);
                return;
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.resp?.data?.message || "Não foi possível atualizar a cotação");
            return false;
        }
    };

    /* Função para criar um novo solicitação */
    const createSolicitacao = async (data) => {
        try {
            const resp = await api.post(`/solicitacao`, data);
            if (resp.status === 200) {
                toast.success(resp.data.message);
                return resp.data;
            }
            toast.error(resp.data.message);
            return;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível criar a solicitação");
            return false;
        }
    };

    return (
        <ContextSolicitacao.Provider
            value={{
                deleteSolicitacao,
                updateSolicitacao,
                createSolicitacao,
                LoadAllSolicitacoes,
                LoadAllSolicitacoesFornecedor
            }}
        >
            {children}
        </ContextSolicitacao.Provider>
    );
};

export { ContextSolicitacao, ProviderSolicitacao };