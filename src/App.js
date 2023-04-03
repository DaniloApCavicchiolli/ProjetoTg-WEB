
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/UserContext";
import { AuthProviderFornecedor } from "./contexts/FornecedorContext";
import { routes } from "./routes/routes";

function App() {

  return (
    <>
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
              {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </Router>
        </AuthProvider>
      </AuthProviderFornecedor>
    </>
  );
}

export default App;
