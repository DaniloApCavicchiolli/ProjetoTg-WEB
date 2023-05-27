import React, { useContext } from "react";
import deleteUser from "../../../../assets/removerUser.png";

import { Container, Image, Content, Body, ButtonSecodary } from "./styles";
import { ContextSolicitacao } from "../../../../contexts/SolicitacoesContext";
import Button from "../../../../components/Button";

function ModalDelete({ setShowModalDelete }) {
    const { deleteSolicitacao } = useContext(ContextSolicitacao);

    return (
        <Container>
            <Body>
                <Image src={deleteUser} />
                <Content>
                    <h1>Você realmente deseja excluir a solicitação?</h1>
                    <div>
                        <ButtonSecodary
                            onClick={async () => {
                                // await deleteSolicitacao(item?.id);
                                setShowModalDelete(false);
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