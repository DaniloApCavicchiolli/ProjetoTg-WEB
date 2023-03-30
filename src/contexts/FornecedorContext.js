import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId, login } from "../services/auth";

const AuthContextFornecedor = createContext({});

const AuthProviderFornecedor = ({ children }) => {

  /* Função para carregar fornecedor */
  const loadingFornecedor = async () => {
    try {
      const id = getId();
      const { data } = await api.get(`/fornecedor/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  /* Função para delatar fornecedor */
  const deleteFornecedor = async (id) => {
    try {
      const { data } = await api.delete(`/fornecedor/${id}`);
      toast.success(data.message);
      return data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");

      return false;
    }
  };

  /* Função para atualiza fornecedor */
  const updateFornecedor = async (data, id) => {
    try {
      const resp = await api.put(`/fornecedor/${id}`, data);
      toast.success(resp?.data?.message);
      return resp.data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");
      return false;
    }
  };

  /* Função para criar um novo fornecedor */
  const createFornecedor = async (data) => {
    try {
      const resp = await api.post(`/fornecedor`, data);
      toast.success("Criado com sucesso");
      return resp.data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");
      return false;
    }
  };

  /* Função para efetuar login */
  const signIn = async (credenciais) => {
    try {
      const response = await api.post("/authFornecedor", credenciais);
      if (response.data?.fornecedor?.acesso === 1) {
        login(
          response.data?.token,
          response.data?.fornecedor?.nivel,
          response.data?.fornecedor?.id
        );
        
        toast.success("Bem Vindo!");
        return response.data;
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
    <AuthContextFornecedor.Provider
      value={{
        signIn,
        deleteFornecedor,
        loadingFornecedor,
        updateFornecedor,
        createFornecedor,
      }}
    >
      {children}
    </AuthContextFornecedor.Provider>
  );
};

export { AuthContextFornecedor, AuthProviderFornecedor };