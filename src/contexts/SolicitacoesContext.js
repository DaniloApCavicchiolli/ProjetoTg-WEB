import React, { createContext } from "react";
import { getNivel, getId } from "../services/auth";
import { toast } from "react-toastify";
import api from "../services/api";

const ContextSolicitacao = createContext({});

const ProviderSolicitacao = ({ children }) => {
    const nivel = getNivel();
    const id = getId();

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
            const response = await api.get(`/solicitacao_fornecedor/${id}`);
            console.log('ResponseFornecedor', response.data.content);
            
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

    /* Função para delatar solicitação */
    const deleteSolicitacao = async (id) => {
        try {
            const response = await api.delete(`/solicitacao/${id}`);
            if (response.status === 200) {
                toast.success(response.data.message);
                return response.data;
            }
            toast.error(response.data.message);
            return;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível excluir a solicitação");
            return false;
        }
    };

    /* Função para atualiza solicitação */
    const updateSolicitacao = async (data, id) => {
        try {
            const resp = await api.put(`/solicitacao/${id}`, data);
            if (resp?.status === 200) {
                toast.success(resp.data.message);
                return resp.data;
            }
            toast.error(resp.data.message);
            return;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível atualizar solicitação");
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