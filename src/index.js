import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/UserContext";
import { AuthProviderFornecedor } from "./contexts/FornecedorContext";
// import App from './views/pages/ListFornecedores/Perfil';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <AuthProviderFornecedor>
        <App />
      </AuthProviderFornecedor>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
