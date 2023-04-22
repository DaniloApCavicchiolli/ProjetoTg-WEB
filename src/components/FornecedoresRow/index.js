import React from 'react'
import { RiDeleteBin5Line, RiCheckboxCircleLine, RiEditBoxFill, RiCloseCircleLine } from "react-icons/ri";
import { Container, Body, Buttons } from "./styles";

const FornecedoresRow = ({ fornecedor, setShowModalEdit, setUserSelected }) => {
    return (
        <Container>
            <header>
                <p>{fornecedor.name}</p>
                <span>{fornecedor.email}</span>
            </header>
            <Body>
                <p>Cidade</p>
                <span>{fornecedor.cidade}</span>
            </Body>
            <Body>
                <p>Endereço</p>
                <span>{fornecedor.endereco}</span>
            </Body>
            <Body>
                <p>Telefone</p>
                <span>{fornecedor.telefone}</span>
            </Body>
            <Buttons>
                {fornecedor.acesso === 1 &&
                    <button style={{ color: "#14A54D" }}
                        onClick={() => { }}
                    >
                        <RiCheckboxCircleLine size={30} />
                    </button>}
                {fornecedor.acesso === 0 &&
                    <button style={{ color: "#ff4f4f" }}
                        onClick={() => { }}
                    >
                        <RiCloseCircleLine size={30} />
                    </button>}
                <button style={{ color: "#F89747" }}
                    onClick={() => { setShowModalEdit(true); setUserSelected(fornecedor) }}
                >
                    <RiEditBoxFill size={30} />
                </button>
                <button style={{ color: "#F26689" }}
                    onClick={() => { }}
                >
                    <RiDeleteBin5Line size={30} />
                </button>
            </Buttons>
        </Container>
    )
}

export default FornecedoresRow
