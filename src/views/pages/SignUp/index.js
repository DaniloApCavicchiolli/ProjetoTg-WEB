import React, { useRef, useContext } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as Yup from "yup";
import getValidationErrors from "../../../utils/getValidationErrors";
import { useHistory } from "react-router";

import { Container, Forms, Body } from "./styles";

import { RiMailLine, RiLock2Line, RiBuilding4Line } from "react-icons/ri";
import { AuthContextFornecedor } from "../../../contexts/FornecedorContext";


const schema = Yup.object().shape({
    name: Yup.string()
        .required("Nome do Estabelecimento obrigatório"),
    email: Yup.string()
        .required("e-mail obrigatório")
        .email("O email precisa ser válido"),
    password: Yup.string()
        .required("Senha obrigatória")
        .min(8, "A senha precisa ter no mínimo 8 caracteres")
        .max(30, "A senha precisa ter no máximo 30 caracteres"),
});

function SignUp() {
    const formRef = useRef(null);
    const { createFornecedor } = useContext(AuthContextFornecedor);
    const History = useHistory();

    const handleSubmit = async (data) => {
        try {
            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            await createFornecedor(data);
            History.push('/dashboard')

        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    return (
        <Container>
            <Body>
                <h1>Criar uma conta</h1>
                <span>Faça o cadastro para continuar</span>
                <Forms ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        <span>Nome</span>
                        <Input name="name" placeholder="Nome do estabelecimento"
                            icon={RiBuilding4Line}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input name="email" placeholder="usuário@teste.com"
                            icon={RiMailLine}
                        />
                    </div>
                    <div>
                        <span>Senha</span>
                        <Input name="password" placeholder="Digite sua senha" type="password"
                            icon={RiLock2Line}
                        />
                    </div>
                    <Button style={{ fontSize: '20px' }}>Cadastrar</Button>
                </Forms>
                <div>
                    Já possui uma conta? <a href="/">Entrar</a>
                </div>
                <div>
                    <a href="/">Cancelar</a>
                </div>
            </Body>
        </Container>
    )
}

export default SignUp;