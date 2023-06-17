import React, { useEffect, useState } from "react";
import {
  RiMenu2Line,
  RiExchangeDollarFill,
  RiShieldUserLine,
  RiSurveyLine,
  RiUser2Fill
} from "react-icons/ri";
import api from "../../../../services/api";
import colors from "../../../../styles/colors";
import { getNivel } from "../../../../services/auth";

import { Container, Content, NamePage, Buscar, Cards } from "./styles";

function Header({ name }) {
  const nivel = getNivel();
  const [solicitacao, setSolicitacao] = useState('');
  const [cotacao, setCotacao] = useState('');
  const [cliente, setCliente] = useState('');
  const [fornecedor, setFornecedor] = useState('');

  const loadSolicitacoes = async () => {
    try {
      const { data } = await api.get(`/solicitacao`);
      setSolicitacao(data.registros);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCotacao = async () => {
    try {
      const { data } = await api.get(`/cotacoes`);
      setCotacao(data.registros);
    } catch (err) {
      console.log(err);
    }
  };

  const loadClientes = async () => {
    try {
      const { data } = await api.get(`/usersAll`);
      setCliente(data.registros);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFornecedor = async () => {
    try {
      const { data } = await api.get(`/fornecedor`);
      setFornecedor(data.registros);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadSolicitacoes();
    loadCotacao();
    loadClientes();
    loadFornecedor();
  }, []);


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
            <p>{solicitacao}
            </p><RiSurveyLine size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: colors.primary }}>
          <span>Cotações Enviadas</span>
          <div>
            <p>{cotacao}</p>
            <RiExchangeDollarFill size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: '#C4C4C4' }}>
          <span>Clientes</span>
          <div>
            <p>{cliente}</p>
            <RiShieldUserLine size={24} color="#FFFFFF" />
          </div>
        </div>
        <div style={{ backgroundColor: colors.secondary }}>
          <span>Fornecedores</span>
          <div>
            <p>{fornecedor}</p>
            <RiUser2Fill size={24} color="#FFFFFF" />
          </div>
        </div>
      </Cards>}
    </Container>
  );
}

export default Header;