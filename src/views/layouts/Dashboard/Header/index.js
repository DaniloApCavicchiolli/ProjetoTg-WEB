import React, { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiMenu2Line,
  RiArrowUpDownLine,
  RiExchangeDollarFill,
  RiShieldUserLine,
  RiContactsBookLine,
  RiSurveyLine,
  RiUser2Fill
} from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import api from "../../../../services/api";
import colors from "../../../../styles/colors";

import { Container, Content, NamePage, Buscar, Cards } from "./styles";

function Header({ name }) {
  const location = useLocation();

  const [solicitacoes, setSolicitacoes] = useState([]);
  const [enviados, setEnviados] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const loadingSolicitacoes = async () => {
    try {
      const { data } = await api.get(`/orcamento`);
      setSolicitacoes(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const loadingEnviados = async () => {
    try {
      const { data } = await api.get(`/orcamentos_enviados`);
      setEnviados(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const loadingContatos = async () => {
    try {
      const { data } = await api.get(`/users_filtro`);
      setContatos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadingSubscriptions = async () => {
    try {
      const { data } = await api.get(`/users_filtro`);
      setSubscriptions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // loadingSolicitacoes();
    // loadingEnviados();
    // loadingContatos();
    // loadingSubscriptions();
  }, []);

  return (
    <Container>
      <Content>
        <NamePage>
          <div id="icon"><RiMenu2Line size={20} /></div>
          <b>{name}</b>
        </NamePage>
        {/* {location.pathname !== "/dashboard" &&
          location.pathname !== "/dashboard/users" &&
          location.pathname !== "/dashboard/fornecedor" &&
          location.pathname !== "/dashboard/profile" &&
          (<Buscar>
            <button type="button" onClick={() => { }}>
              <RiSearchLine size={20} />
            </button>
            <input name="buscar" placeholder="buscar" />
          </Buscar>)} */}

      </Content>
      {
        location.pathname !== "/dashboard/users" &&
        location.pathname !== "/dashboard/fornecedor" &&
        location.pathname !== "/dashboard/profile" &&
        (<Cards>
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
        </Cards>)}
    </Container>
  );
}

export default Header;