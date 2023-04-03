import React, { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiMenu2Line,
  RiArrowUpDownLine,
  RiExchangeDollarFill,
  RiShieldUserLine,
  RiContactsBookLine,
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
          location.pathname !== "/dashboard/GraficosFornecedor" &&
          location.pathname !== "/dashboard/users" &&
          location.pathname !== "/dashboard/fornecedor" &&
          location.pathname !== "/dashboard/enviadosAdmin" &&
          location.pathname !== "/dashboard/enviados" &&
          location.pathname !== "/dashboard/solicitacoesAdmin" &&
          location.pathname !== "/dashboard/solicitacoes" &&
          location.pathname !== "/dashboard/produtosInsumos" &&
          location.pathname !== "/dashboard/regiaoCidades" &&
          location.pathname !== "/dashboard/profile" &&
          location.pathname !== "/dashboard/produtosQueTrabalha" &&
          location.pathname !== "/dashboard/BuyPlan" &&
          (<Buscar>
            <button type="button" onClick={() => { }}>
              <RiSearchLine size={20} />
            </button>
            <input name="buscar" placeholder="buscar" />
          </Buscar>)} */}

      </Content>
      {/* {
        location.pathname !== "/dashboard/BuyPlan" &&
        location.pathname !== "/dashboard/users" &&
        location.pathname !== "/dashboard/fornecedor" &&
        location.pathname !== "/dashboard/produtosInsumos" &&
        location.pathname !== "/dashboard/regiaoCidades" &&
        location.pathname !== "/dashboard/produtosQueTrabalha" &&
        location.pathname !== "/dashboard/GraficosFornecedor" &&
        location.pathname !== "/dashboard/enviados" &&
        location.pathname !== "/dashboard/solicitacoes" &&
        location.pathname !== "/dashboard/profile" &&
        (<Cards>
          <div style={{ backgroundColor: '#626679' }}>
            <span>Novos Orçamentos</span>
            <div>
              <p>{solicitacoes.length}
              </p><RiArrowUpDownLine size={20} color="#FFFFFF" />
            </div>
          </div>
          <div style={{ backgroundColor: colors.primary }}>
            <span>Orçamentos Enviados</span>
            <div>
              <p>{enviados.length}</p>
              <RiExchangeDollarFill size={20} color="#FFFFFF" />
            </div>
          </div>
          <div style={{ backgroundColor: '#C4C4C4' }}>
            <span>Assinaturas</span>
            <div>
              <p>{subscriptions.length}</p>
              <RiShieldUserLine size={20} color="#FFFFFF" />
            </div>
          </div>
          <div style={{ backgroundColor: colors.secondary }}>
            <span>Novos Contatos</span>
            <div>
              <p>{contatos.length}</p>
              <RiContactsBookLine size={20} color="#FFFFFF" />
            </div>
          </div>
        </Cards>)} */}
    </Container>
  );
}

export default Header;

/*  onChange={(ev) => setBusca(ev.target.value)} */