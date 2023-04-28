import React, { useContext } from "react";
import deleteUser from "../../../../../assets/removerUser.png";
import Button from "../../../../../components/Button";
import { ContextCategoria } from "../../../../../contexts/CategoriaContext";

import { Container, Image, Content, Body, ButtonSecondary } from "./styles";

function ModalDelete({ setShowModalDelete, user, loading }) {

  const { deleteCategoria } = useContext(ContextCategoria);

  return (
    <Container>
      <Body>
        <Image src={deleteUser}/>
        <Content>
          <h1>Você realmente deseja excluir a Categoria?</h1>
          <div>
            <ButtonSecondary
              onClick={async () => {
                await deleteCategoria(user?.id);
                await loading();
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

export default ModalDelete;