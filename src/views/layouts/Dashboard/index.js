import React, { useEffect, useState } from "react";
import { routes } from "../../../routes/routes";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";
import { getNivel } from "../../../services/auth";

import { Container, Content } from "./styles";

function Dashboard({ props }) {
  const [title, setTitle] = useState("");
  const { location } = props;

  const [nivel, setNivel] = useState();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    [...routes?.protected]?.map((route) => {
      if (route?.path == location?.pathname) {
        setTitle(route.title);
      }
    });
    setNivel(getNivel());
  }, [title, location]);


  return (
    <Container>
      <Content>
        <Header name={title} />
        <Switch>
          {[...routes.protected].map(
            (route, index) =>
              route?.role?.find((elemento) => elemento === 999 || elemento === 1) &&
              (
                <Route
                  key={index.toString()}
                  path={route.path}
                  exact
                  component={route.component}
                />
              )
          )}
        </Switch>
      </Content>
    </Container>
  );
}

export default Dashboard;