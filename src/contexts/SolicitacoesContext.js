import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const ContextSolicitacao = createContext({});

const ProviderSolicitacao = ({ children }) => {

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
            }}
        >
            {children}
        </ContextSolicitacao.Provider>
    );
};

export { ContextSolicitacao, ProviderSolicitacao };