import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/UserContext";
import { AuthProviderFornecedor } from "./contexts/FornecedorContext";
import { ProviderCategoria } from './contexts/CategoriaContext';
import { ProviderProduto } from './contexts/ProdutoContext';
import { ProviderFornecedorProduto } from './contexts/FornecedorProdutosContext';
import { ProviderSolicitacao } from './contexts/SolicitacoesContext';
import { ProviderCotacao } from './contexts/CotacaoContext';
// import App from './views/pages/ListFornecedores/Perfil';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <AuthProviderFornecedor>
        <ProviderCategoria>
          <ProviderProduto>
            <ProviderFornecedorProduto>
              <ProviderSolicitacao>
                <ProviderCotacao>
                  <App />
                </ProviderCotacao>
              </ProviderSolicitacao>
            </ProviderFornecedorProduto>
          </ProviderProduto>
        </ProviderCategoria>
      </AuthProviderFornecedor>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
