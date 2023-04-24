import React, { useState, useContext, useRef, useEffect } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AuthContextFornecedor } from "../../../contexts/FornecedorContext";
import { getId } from "../../../services/auth";
import * as Yup from "yup";
import {
    RiMailLine,
    RiPhoneLine,
    RiRoadMapLine,
    RiCommunityLine,
    RiUser3Line
} from "react-icons/ri";

import { Container, Forms, Content, Column } from "./styles";
import getValidationErrors from "../../../utils/getValidationErrors";
import colors from "../../../styles/colors";
import { toast } from "react-toastify";
import api from "../../../services/api";

function Perfil() {
    const [user, setUser] = useState({});
    const formRef = useRef(null);
    const { updateFornecedor } = useContext(AuthContextFornecedor);
    const id = getId();

    const loadingForn = async () => {
        try {
            const { data } = await api.get(`/fornecedor/${id}`);
            setUser(data);
        } catch (err) {
            console.log(err);
        }
    };

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
                    .min(3, "O endereço precisa ter no mínimo 3 caracteres")
                    .max(30, "O endereço precisa ter no máximo 30 caracteres"),
                // password: Yup.string()
                //     .required("Senha obrigatória!")
                //     .min(8, "A senha precisa ter no mínimo 8 caracteres")
                //     .max(20, "A senha precisa ter no máximo 20 caracteres"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
            formRef.current?.setErrors({});

            const resp = await updateFornecedor(data, id);
            setUser(resp);
        } catch (err) {
            console.log(err);
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    };

    useEffect(() => {
        loadingForn();
    },[]);

    return (
        <>
            <Container>
                <h1>Editar seu Perfil</h1>
                <span>Edição de perfil</span>
                <Forms ref={formRef} onSubmit={handleSubmit}
                    initialData={{ ...user, senha: "" }}
                >
                    <Content>
                        <Column>
                            <div>
                                <span>Nome Estabelecimento</span>
                                <Input name="name" placeholder="nome do estabelecimento"
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
                        <Column style={{ paddingLeft: "55px" }}>
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
                    <div id="button" style={{ backgroundColor: "#FFF" }}>
                        <Button style={{ fontSize: '15px', width: "20%" }} backgroundColor={colors.secondary}>
                            Salvar
                        </Button>
                    </div>
                </Forms>
            </Container>
        </>
    );
}

export default Perfil;