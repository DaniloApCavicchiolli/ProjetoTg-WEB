import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
    RiDashboardLine,
    RiTeamLine,
    RiUserSharedLine,
    RiProfileFill
} from "react-icons/ri";

import SignIn from "../views/pages/SignIn";
import SignUp from "../views/pages/SignUp";
import ListagemUser from "../views/pages/ListUsers";
import ListagemFornecedor from "../views/pages/ListFornecedores";
import Perfil from "../views/pages/Profile";
import { getToken } from "../services/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...{ rest }}
            render={
                (props) =>
                    getToken() != null ? (
                        <Component {...{ props }} />
                    ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
                // eslint-disable-next-line react/jsx-curly-newline
            }
        />
    );
};

export const routes = {
    protected: [
        {
            path: "/dashboard",
            title: "Dashboard",
            role: [999, 1],
            icon: RiDashboardLine,
            component: () => <div>Dashboard</div>,
        },
        {
            path: "/dashboard/users",
            title: "Usuários",
            role: [999],
            icon: RiTeamLine,
            component: () => <ListagemUser />,
        },
        {
            path: "/dashboard/fornecedor",
            title: "Fornecedores",
            role: [999],
            icon: RiUserSharedLine,
            component: () => <ListagemFornecedor />,
        },
        {
            path: "/dashboard/profile",
            title: "Perfil",
            role: [999, 1],
            icon: RiProfileFill,
            component: () => <Perfil />,
          },
    ],
    public: [
        {
            path: "/",
            component: () => <SignIn />,
        },
        {
            path: "/register",
            component: () => <SignUp />,
        },
    ],
};