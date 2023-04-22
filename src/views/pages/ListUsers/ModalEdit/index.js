import React, { useRef, useContext } from "react";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { AuthContext } from "../../../../contexts/UserContext";
import getValidationErrors from "../../../../utils/getValidationErrors";
import {
    RiMailLine,
    RiPhoneLine,
    RiRoadMapLine,
    RiCommunityLine,
    RiUser3Line
} from "react-icons/ri";

import { Container, Forms, Body, Content, Column, Image } from "./styles";

function ModalEdit({ setShowModalEdit, user, loading }) {
    const formRef = useRef(null);
    const { updateUser } = useContext(AuthContext);

    const handleSubmit = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required("Nome obrigatório!")
                    .min(3, "O nome precisa ter no mínimo 3 caracteres")
                    .max(50, "O nome precisa ter no máximo 30 caracteres"),
                email: Yup.string()
                    .required("Email obrigatório!")
                    .email("O email precisa ser válido!"),
                cidade: Yup.string()
                    .min(3, "A cidade precisa ter no mínimo 3 caracteres")
                    .max(30, "A cidade precisa ter no máximo 30 caracteres"),
                endereco: Yup.string()
                    .min(3, "O enderço precisa ter no mínimo 3 caracteres")
                    .max(30, "O endereço precisa ter no máximo 30 caracteres"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            await updateUser(data, user?.id);
            loading();
            setShowModalEdit(false);
        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    return (
        <>
            <Container>
                <Body>
                    <div>
                        <Image style={{ background: 'transparent' }} />
                        <h1>Editar Usuário</h1>
                        <Image />
                    </div>
                    <p>Confira os dados abaixo</p>
                    <Forms ref={formRef} onSubmit={handleSubmit} initialData={{ ...user }}>
                        <Content>
                            <Column>
                                <div>
                                    <span>Nome</span>
                                    <Input name="name" placeholder="nome"
                                        icon={RiUser3Line}
                                    />
                                </div>
                                <div>
                                    <span>E-mail</span>
                                    <Input name="email" placeholder="email"
                                        icon={RiMailLine}
                                    />
                                </div>
                                <div>
                                    <span>Telefone</span>
                                    <Input name="telefone" placeholder="telefone"
                                        icon={RiPhoneLine} formatar="(99)99999-9999"
                                    />
                                </div>
                            </Column>
                            <Column>
                                <div>
                                    <span>Cidade</span>
                                    <Input name="cidade" placeholder="cidade"
                                        icon={RiCommunityLine}
                                    />
                                </div>
                                <div>
                                    <span>Endereço</span>
                                    <Input name="endereco" placeholder="endereço"
                                        icon={RiRoadMapLine}
                                    />
                                </div>
                                {/* <div>
                                    <span>Senha</span>
                                    <Input name="password" placeholder="****" type="password"
                                        icon={RiLock2Line}
                                    />
                                </div> */}
                            </Column>
                        </Content>
                        <div id='button' style={{ backgroundColor: "#FFF" }}>
                            <Button style={{ fontSize: '18px', width: "30%" }}>Salvar</Button>
                        </div>
                    </Forms>
                    <a href="#" onClick={() => setShowModalEdit(false)}>
                        Voltar
                    </a>
                </Body>
            </Container>
        </>
    );
}

export default ModalEdit;