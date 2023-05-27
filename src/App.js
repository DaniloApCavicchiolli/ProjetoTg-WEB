
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/UserContext";
import { AuthProviderFornecedor } from "./contexts/FornecedorContext";
import { ProviderCategoria } from "./contexts/CategoriaContext";
import { ProviderProduto } from "./contexts/ProdutoContext";
import { ProviderFornecedorProduto } from "./contexts/FornecedorProdutosContext";
import { ProviderSolicitacao } from "./contexts/SolicitacoesContext";
import { routes, PrivateRoute } from "./routes/routes";

import Dashboard from "./views/layouts/Dashboard";

function App() {

  return (
    <>
      <ProviderSolicitacao>
        <ProviderFornecedorProduto>
          <ProviderProduto>
            <ProviderCategoria>
              <AuthProviderFornecedor>
                <AuthProvider>
                  <Router>
                    <Switch>
                      {routes?.public?.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          exact
                          component={route.component}
                        />
                      ))}
                      <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                  </Router>
                </AuthProvider>
              </AuthProviderFornecedor>
            </ProviderCategoria>
          </ProviderProduto>
        </ProviderFornecedorProduto>
      </ProviderSolicitacao>
    </>
  );
}

export default App;
