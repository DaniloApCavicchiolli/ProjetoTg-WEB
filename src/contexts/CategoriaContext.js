import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId } from "../services/auth";

const ContextCategoria = createContext({});

const ProviderCategoria = ({ children }) => {

    /* Função para carregar categorias */
    const loadingCategoria = async () => {
        try {
            const id = getId();
            const { data } = await api.get(`/categoria/${id}`);
            return data;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    /* Função para delatar categoria */
    const deleteCategoria = async (id) => {
        try {
            const resp = await api.delete(`/categoria/${id}`);
            resp?.status === 200 ?
                toast.success("Deletado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível deletar a categoria");
            return false;
        }
    };

    /* Função para atualizar categoria */
    const updateCategoria = async (data, id) => {
        try {
            const resp = await api.put(`/categoria/${id}`, data);
            resp?.status === 200 ?
                toast.success("Editado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível editar a categoria");
            return false;
        }
    };

    /* Função para criar uma nova categoria */
    const createCategoria = async (data) => {
        try {
            const resp = await api.post(`/categoria`, data);
            resp?.status === 200 ?
                toast.success("Cadastrado com sucesso!") :
                toast.error(resp?.data?.message)
            return resp.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Não foi possível registrar categoria");
            return false;
        }
    };

    return (
        <ContextCategoria.Provider
            value={{
                deleteCategoria,
                loadingCategoria,
                updateCategoria,
                createCategoria,
            }}
        >
            {children}
        </ContextCategoria.Provider>
    );
};

export { ContextCategoria, ProviderCategoria };