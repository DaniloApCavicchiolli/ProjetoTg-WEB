import React, { useRef, useContext } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import getValidationErrors from "../../../utils/getValidationErrors";
import * as Yup from "yup";
import { AuthContextFornecedor } from "../../../contexts/FornecedorContext";
import { useHistory } from "react-router";

import { Container, Forms, Body } from './styles';
import { RiMailLine, RiLock2Line } from "react-icons/ri";

function SignIn() {
    const formRef = useRef(null);
    const { signIn } = useContext(AuthContextFornecedor);
    const History = useHistory();

    const handleSubmit = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required("e-mail obrigatório!")
                    .email("O email precisa ser válido"),
                password: Yup.string()
                    .required("Senha obrigatória!")
                    .min(8, "A senha precisa ter no mínimo 8 caracteres")
                    .max(30, "A senha precisa ter no máximo 30 caracteres"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            const resp = await signIn(data);
            console.log('resp', resp);

            if (resp != false) {
                if (resp.fornecedor.nivel === 999) {
                    History.push('/dashboard')
                }
            }

        } catch (err) {
            console.log(err);
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    return (
        <Container>
            <Body>
                <h1>Bem vindo!</h1>
                <span> Faça o login para acessar seus dados </span>
                <Forms ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        <span>E-mail</span>
                        <Input name="email" placeholder="usuário@teste.com "
                            icon={RiMailLine}
                        />
                    </div>
                    <div>
                        <span>Senha</span>
                        <Input
                            name="password" placeholder="Digite sua senha" type="password"
                            icon={RiLock2Line}
                        />
                    </div>
                    <Button type='submit' style={{ fontSize: '20px' }}>Login</Button>
                </Forms>

                <div>
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </div>
            </Body>
        </Container>
    );
}

export default SignIn;