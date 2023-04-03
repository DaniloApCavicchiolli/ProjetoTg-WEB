import React, { useState, useEffect} from "react";

import { Container, ContainerSide, Title, Menu } from "./styles";
import { useHistory } from "react-router-dom";
import { getNivel } from "../../../../services/auth";
import ButtonList from "../ButtonList";
import { routes } from "../../../../routes/routes";
import Button from "../../../../components/Button";
import colors from "../../../../styles/colors";
// import fonts from "../../../../styles/fonts"
import { logout } from "../../../../services/auth";

function Sidebar({ ativado }) {
  const history = useHistory();
  const nivel = getNivel();

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <Container>
      <ContainerSide>
        <Title />
        <Menu>
          {routes.protected.map(
            (route, index) =>
              route?.role?.find((elemento) => elemento == nivel) && (
                <ButtonList
                  isActive={ativado == route.title}
                  icon={route.icon}
                  title={route.title}
                  key={index}
                  isMobile={isMobile}
                  onClick={() => history.push(route.path)}
                />
              )
          )}
        </Menu>
        <Button
          style={{ fontSize: '18px' }}
          // fontFamily={fonts[700]}
          borderRadius={'0px'}
          backgroundColor='transparent'
          color={`${colors.darkGrayishBlue}`}
          shouldHover={true}
          onClick={() => {
            logout()
            history.push("/")
          }}
        >
          Sair
        </Button>
      </ContainerSide>
    </Container>
  );
}

export default Sidebar;