import React, { useContext } from "react";
import deleteUser from "../../../../assets/removerUser.png";

import { Container, Image, Content, Body, ButtonSecudary } from "./styles";
import { ContextFornecedorProduto } from "../../../../contexts/FornecedorProdutosContext";
import Button from "../../../../components/Button";

function ModalDelete({ setShowModalDelete, produto, setFornecedorProdutos }) {

    const { deleteFornecedorProduto, loadFornecedorProdutos } = useContext(ContextFornecedorProduto);

    return (
        <Container>
            <Body>
                <Image src={deleteUser} />
                <Content>
                    <h1>Você realmente deseja excluir o Produto?</h1>
                    <div>
                        <ButtonSecudary
                            onClick={async () => {
                                await deleteFornecedorProduto(produto.id);
                                await loadFornecedorProdutos(setFornecedorProdutos);
                                setShowModalDelete(false);
                                // window.location.reload();
                            }}
                        >
                            CONFIRMAR
                        </ButtonSecudary>
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