import React, { useEffect, useState } from "react";
import {
  RiMenu2Line,
  RiExchangeDollarFill,
  RiShieldUserLine,
  RiSurveyLine,
  RiUser2Fill
} from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import api from "../../../../services/api";
import colors from "../../../../styles/colors";
import { getNivel } from "../../../../services/auth";

import { Container, Content, NamePage, Buscar, Cards } from "./styles";

function Header({ name }) {
  const nivel = getNivel();

  return (
    <Container>
      <Content>
        <NamePage>
          <div id="icon"><RiMenu2Line size={20} /></div>
          <b>{name}</b>
        </NamePage>
      </Content>
      {nivel === '999' && <Cards>
        <div style={{ backgroundColor: '#626679' }}>
          <span>Novas Solicitações</span>
          <div>
            <p>{25}
            </p><RiSurveyLine size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: colors.primary }}>
          <span>Cotações Enviadas</span>
          <div>
            <p>{25}</p>
            <RiExchangeDollarFill size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: '#C4C4C4' }}>
          <span>Clientes</span>
          <div>
            <p>{10}</p>
            <RiShieldUserLine size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: colors.secondary }}>
          <span>Fornecedores</span>
          <div>
            <p>{16}</p>
            <RiUser2Fill size={24} color="#FFFFFF" />
          </div>
        </div>
      </Cards>}
    </Container>
  );
}

export default Header;