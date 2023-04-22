import React, { useContext } from "react";
import deleteUser from "../../../../assets/removerUser.png";

import { Container, Image, Content, Body, ButtonSecodary } from "./styles";
import { AuthContextFornecedor } from "../../../../contexts/FornecedorContext";
import Button from "../../../../components/Button";

function ModalDelete({ setShowModalDelete, user, loading }) {
    const { deleteFornecedor } = useContext(AuthContextFornecedor);

  return (
    <Container>
      <Body>
        <Image src={deleteUser} />
        <Content>
          <h1>Você realmente deseja excluir o fornecedor?</h1>
          <div>
            <ButtonSecodary
              onClick={async () => {
                await deleteFornecedor(user?.id);
                await loading();
                setShowModalDelete(false);
              }}
            >
              CONFIRMAR
            </ButtonSecodary>
            <Button
              style={{ width: "30%", fontSize: '18px'}}
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