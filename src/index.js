import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './contexts/UserContext';
import { AuthProviderFornecedor } from './contexts/FornecedorContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <>
      <AuthProvider>
        <AuthProviderFornecedor>
          <App />
        </AuthProviderFornecedor>
      </AuthProvider>
    </>
  </React.StrictMode>
);
