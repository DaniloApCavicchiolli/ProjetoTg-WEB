import React from 'react';
import { RiDeleteBin5Line, RiCheckboxCircleLine, RiEditBoxFill, RiCloseCircleLine } from "react-icons/ri";
import { Container, Body, Buttons } from './styles';

const usersRow = ({ users }) => {

    return (
        <Container>
            <header>
                <p>{users.name}</p>
                <span>{users.email}</span>
            </header>
            <Body>
                <p>Telefone</p>
                <span>{users.telefone}</span>
            </Body>
            <Body>
                <p>Cidade</p>
                <span>{users.cidade}</span>
            </Body>
            <Body>
                <p>Endereço</p>
                <span>{users.endereco}</span>
            </Body>
            <Buttons>
                {users.acesso === 1 &&
                    <button style={{ color: "#14A54D" }}
                        onClick={() => { }}
                    >
                        <RiCheckboxCircleLine size={30} />
                    </button>}
                {users.acesso === 0 &&
                    <button style={{ color: "#ff4f4f" }}
                        onClick={() => { }}
                    >
                        <RiCloseCircleLine size={30} />
                    </button>}
                <button style={{ color: "#F89747" }}
                    onClick={() => { }}
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

export default usersRow
