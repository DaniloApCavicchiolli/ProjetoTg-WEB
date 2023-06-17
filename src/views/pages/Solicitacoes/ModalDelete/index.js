import React, { useContext } from "react";
import deleteUser from "../../../../assets/removerUser.png";

import { Container, Image, Content, Body, ButtonSecodary } from "./styles";
import { ContextSolicitacao } from "../../../../contexts/SolicitacoesContext";
import Button from "../../../../components/Button";

function ModalDelete({ setShowModalDelete, item, loadSolicitacoes }) {
    const { deleteSolicitacao } = useContext(ContextSolicitacao);
    const cotaçãoId = item.fk_cotacao.map(item => item.id);

    return (
        <Container>
            <Body>
                <Image src={deleteUser} />
                <Content>
                    <h1>Você realmente deseja excluir a cotação?</h1>
                    <div>
                        <ButtonSecodary
                            onClick={async () => {
                                await deleteSolicitacao(cotaçãoId);
                                setShowModalDelete(false);
                                loadSolicitacoes();
                            }}
                        >
                            CONFIRMAR
                        </ButtonSecodary>
                        <Button
                            style={{ width: "30%", fontSize: '18px' }}
                            onClick={() => setShowModalDelete(false)}
                        >
                            Não
                        </Button>
                    </div>
                </Content>
            </Body>
        </Container>
    );
}

export default ModalDelete;