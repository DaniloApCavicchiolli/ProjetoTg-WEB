import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId, login } from "../services/auth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    /* Função para carregar usuário */
    const loadingUser = async () => {
        try {
            const id = getId();
            const { data } = await api.get(`/users/${id}`);
            return data;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    /* Função para delatar usuário */
    const deleteUsers = async (id) => {
        try {
            const { data } = await api.delete(`/users/${id}`);
            toast.success(data.message);
            return data;
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.error || "Não foi possível excluir o usuário");

            return false;
        }
    };

    /* Função para atualiza usuário */
    const updateUser = async (data, id) => {
        try {
            const resp = await api.put(`/users/${id}`, data);
            if (resp?.status === 200) {
                toast.success("Usuário atualizado com sucesso");
                return resp.data;
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.error || "Não foi possível atualizar usuário");
            return false;
        }
    };

    /* Função para criar um novo usuário */
    const createUser = async (data) => {
        try {
            const resp = await api.post(`/users`, data);
            if (resp.status === 200) {
                toast.success("Usuário criado com sucesso");
                return resp.data;
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.error || "Não foi possível criar usuário");
            return false;
        }
    };

    /* Função para efetuar login */
    const signIn = async (credenciais) => {
        // console.log(credenciais);
        try {
            const response = await api.post("/auth", credenciais);
            if (response.data?.user?.acesso === 1) {
                login(
                    response.data?.token,
                    response.data?.user?.nivel,
                    response.data?.user?.id
                );

                toast.success("Bem Vindo!");
                return true;
            } else {
                toast.error("Usuário não autorizado");
                return false;
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");
            return false;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signIn,
                deleteUsers,
                loadingUser,
                updateUser,
                createUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };