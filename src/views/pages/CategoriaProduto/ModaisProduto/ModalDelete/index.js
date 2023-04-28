import React, { useContext } from "react";
import deleteUser from "../../../../../assets/removerUser.png";
import Button from "../../../../../components/Button";
import { ContextProduto } from "../../../../../contexts/ProdutoContext";

import { Container, Image, Content, Body, ButtonSecondary } from "./styles";

function ModalDeleteProduto({ setShowModalDelete, user, loading }) {

  const { deleteProduto } = useContext(ContextProduto);

  return (
    <Container>
      <Body>
        <Image src={deleteUser} />
        <Content>
          <h1>Você realmente deseja excluir o produto?</h1>
          <div>
            <ButtonSecondary
              onClick={async () => {
                await deleteProduto(user?.id);
                loading();
                setShowModalDelete(false);
              }}
            >
              CONFIRMAR
            </ButtonSecondary>
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

export default ModalDeleteProduto;